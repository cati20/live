import React ,{Fragment, useContext}from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ReportContext from '../../context/booking/reportContext';
import {faSignOutAlt, faHome, faCameraRetro,faUserPlus, faSignInAlt, faAddressBook, faAdjust, faPen} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Menu,Segment, Container, Responsive} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Pop from '../../utils/modal';

const Navbar = () => {
    const authContext = useContext(AuthContext);
    const reportContext =useContext(ReportContext);

    const {clearReport} = reportContext
    const {isAuthenticated, logout,user} = authContext;

    const onLogout = () =>{
        logout();
        clearReport();
    }
    const authLinks = (
        <Fragment>
          <Menu.Menu position='right'>
          <Menu.Item>
            {user && <a style={{marginRigt:"5px"}}>
                <FontAwesomeIcon icon={faPen}/>
                <Pop />
                  </a>}
            </Menu.Item>


            <Menu.Item>
            {user && <a style={{marginRigt:"5px"}}>
                <FontAwesomeIcon icon={faUserPlus}/>
                  <span>Hi {user.name}</span></a>}
            </Menu.Item>

          <Menu.Item
          
          name='logout'
          >

                <a onClick={onLogout} href="/">
                <FontAwesomeIcon icon={faSignOutAlt}/><span className="hide-sm">Logout</span>
                </a>
            
            </Menu.Item>
            
            </Menu.Menu>
        </Fragment>
    );

    const guesthLinks = (
        <Fragment>
         <Menu.Item
          name='Home'
	      >
        <Link to="/"><FontAwesomeIcon icon={faHome}/>Home</Link>
        </Menu.Item>
        <Menu.Item
          name='Reports'
        >
        <Link to="/reports"><FontAwesomeIcon icon={faCameraRetro}/>Reports</Link>
        </Menu.Item>
        <Menu.Item
          name='Register'
        >
           <Link to="/register"><FontAwesomeIcon icon={faUserPlus}/>Sign Up</Link>
           </Menu.Item>
        <Menu.Item
          name='Sign In'
        >
           <Link to="/login"><FontAwesomeIcon icon={faSignInAlt}/>Sign In</Link>
          </Menu.Item> 
        
        </Fragment>
    );
    
    

    return (
        
      <Segment.Group>
        <Responsive as={Segment} {...Responsive.onlyComputer}>
          
       <Menu fixed="top" inverted>
         <Container>   
        <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
            <p style={headers} >Noko Ramaboya</p>
        </Menu.Item>
        {isAuthenticated? authLinks : guesthLinks }
      
        </Container>
      </Menu>
        </Responsive>

        <Responsive as={Segment} {...Responsive.onlyTablet}>
        <Menu fixed="top" inverted>
         <Container>   
        <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
            Noko Ramaboya
        </Menu.Item>
        {isAuthenticated? authLinks : guesthLinks }
      
        </Container>
      </Menu>
        </Responsive>


        <Responsive as={Segment} {...Responsive.onlyMobile}>
        <Menu fixed="top" inverted>
        <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" />
            Noko Ramaboya
        </Menu.Item>
        {isAuthenticated? authLinks :
        
      
       <Menu.Item
        
       >
          <Link to="/login"><FontAwesomeIcon icon={faSignInAlt}/>Log In</Link>
         </Menu.Item>
         
        
          
        
        }
         </Menu>
        </Responsive>

      </Segment.Group>


                
           
    )
}

const headers = {
  fontFamily: 'myriad-pro-light sans-serif',
  fontStyle: 'normal',
  fontWeight: 800,
  color:'white'
}

export default Navbar