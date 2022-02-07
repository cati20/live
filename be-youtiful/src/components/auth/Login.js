import React, {useState, useContext, useEffect} from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';



const Login = props => {


    const alertContext =  useContext(AlertContext)
    const authContext =  useContext(AuthContext)

    const {setAlert} = alertContext;
    const {login, error, clearErrors, isAuthenticated, loadUser } = authContext;
    
    
     useEffect( ()=> {
        if(isAuthenticated){
         props.history.push('/book')
            
        }


         if(error){
             setAlert(error,'danger');
             clearErrors();
             
         }
         // eslint-disable-next-line
     },[error, isAuthenticated, props.history]);




    const [client, setUser] = useState({
        email:'',
        password : '',
        
    })

    const {email, password} = client;

    const onChange = e => setUser({...client, [e.target.name]: e.target.value })

    const onSubmit = (e) =>{
        e.preventDefault();
        if(email === '' || password === ''){
            setAlert('Please fill in all fields', 'danger')
        }else{
            login({
                email,
                password
            }) 

            loadUser()
        }
        
    }

    return(
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' centered>
    <Grid.Column style={{ maxWidth: 450 }} mobile="16" >
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='assets/logo.png' /> <h2 style={headers}>Log-in to your account</h2>
      </Header>
      <Form size='large' onSubmit={onSubmit}>
        <Segment pilled >
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' value={email} name="email" onChange={onChange} />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
	    value={password}
	    name="password" 
	    onChange={onChange}
          />

          <Button color='teal' fluid size='large' type="submit" style={textOnly}>
            Login
          </Button>
        </Segment>
      </Form>
      <Message style={textOnly}>
        New user? <a href='/register' style={textOnly}>Sign Up</a>
      </Message>
      
    </Grid.Column>
  </Grid>
    )
}

const headers = {
  fontFamily: 'myriad-pro-light, serif',
  fontStyle: 'normal',
  fontWeight: 500,
  color: '#E03996'
}

const textOnly = {
  fontFamily: 'minion-pro-italic, sans-serif',
  fontStyle: 'normal',
  fontWeight: 500
}
export default Login
