import React, {useState,useContext, useEffect} from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const Register = (props) => {
    const alertContext =  useContext(AlertContext)
    const authContext =  useContext(AuthContext)

    const {setAlert} = alertContext;
    const {register, error, clearErrors, isAuthenticated} = authContext;
    
    
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


    const [user, setUser] = useState({
        department: '',
        name:'',
        surname:'',
        email:'',
        password : '',
        password2: ''
    })


    const {department,name,surname, email, password, password2} = user;

    const onChange = e => setUser({...user, [e.target.name]: e.target.value })
	

    const onSubmit = e =>{
        e.preventDefault();
        if (name === '' || email === '' || password ==='') {
            setAlert('please enter all fields', 'danger');
            
        }else if (password !== password2){
            setAlert('Passwords do not match', 'danger');

        }else{
            register({
                department,
                name,
                surname,
                email,
                password
            });
        }
        
    }

    return(
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='assets/logo.png' /> <h3 style={headers}>Noko Ramaboya Sign-Up </h3>
      </Header>
      <Form size='large' onSubmit={onSubmit}>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Department' value={department} name="department" onChange={onChange} />
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Name' value={name} name="name" onChange={onChange} />
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Surname' value={surname} name="surname" onChange={onChange} />
          <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' value={email} name="email" onChange={onChange} />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
	    name="password"
	    value={password} 
	    onChange={onChange}
          />
            <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Confirm Password'
            type='password'
	    value={password2}
            name="password2"
            onChange={onChange}
          />
          <Button color='teal' fluid size='large' type="submit" style={textOnly}>
            Sign-Up
          </Button>
        </Segment>
      </Form>
      <Message style={textOnly}>
        Already have an account? <a href='/login' style={textOnly}>Sign In</a>
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

export default Register
