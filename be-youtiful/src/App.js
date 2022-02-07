import React, { useState} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Navbar from './components/layout/Navbar';
import Book from './components/pages/Book';
import Home from './components/pages/Home';
//import Landing from './components/pages/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import setAuthToken from './utils/setAuthToken'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import PrivateRoute from './components/routing/PrivateRoute'
import { Segment, Responsive, Icon, Menu, Sidebar, Button,  Grid} from 'semantic-ui-react';

//import bookingState from './context/booking/bookingState';
import ReportState from './context/booking/ReportState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';





if(localStorage.token){
  setAuthToken(localStorage.token)
  
    console.log('token')
  
}else{
  console.log('what where when')
}


const App = () => {


  const [visible, setVisible] = useState(false)

  

  

  return (
    <AuthState>
    <ReportState>
      <AlertState >
    <Router>
     
    <Navbar/>
    
    <Alerts />
    <Responsive  as={Menu.Item} {...Responsive.onlyMobile} style={{marginTop:0}} >
      <Menu  inverted>
      <Button  icon="th"  onClick={setVisible}/>
      </Menu>
      <Sidebar   style={{marginTop:60}}
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        vertical
        visible={visible}
        onVisible={() =>setVisible(true) }
        onHide={() =>setVisible(false)}
        width='thin'
        direction="right"
      >
        <Menu.Item >
          <Icon name='home' />
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item >
          <Icon name='sign-in' />
          <Link to="/login">Sign In </Link>
        </Menu.Item>
        <Menu.Item >
          <Icon name='signup' />
          <Link to="/register">Sign-Up </Link>
        </Menu.Item>
      </Sidebar>
    </Responsive>

    

    


    <Responsive {...Responsive.onlyComputer}>
    <Segment raised floated="right" style={{marginRight:120}} size="larger" > 
    <Grid centered container divided doubling stretched 
 stackable columns={1}>
      <Grid.Column >
        
          <Switch>
            <PrivateRoute  exact path='/book' component= {Book}/>
            <Route exact path='/' component= {Home} />
            <Route exact path='/register' component= {Register} />
            <Route exact path='/login' component= {Login} />
          </Switch>
        
        </Grid.Column>
        </Grid>
        </Segment>
    </Responsive>

    <Responsive  {...Responsive.onlyMobile}>
    <Segment raised floated="right"  > 
    <Grid centered container divided doubling stretched 
 stackable columns={1}>
      <Grid.Column >
        
          <Switch>
            <PrivateRoute  exact path='/book' component= {Book}/>
            <Route exact path='/' component= {Home} />
            <Route exact path='/register' component= {Register} />
            <Route exact path='/login' component= {Login} />
          </Switch>
        
        </Grid.Column>
        </Grid>
        </Segment>
    </Responsive>
    </Router>
    </AlertState>
    </ReportState>
    </AuthState>
  );
  

}

export default App;