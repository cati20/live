import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const SignupContext = createContext()

const SignupContextProvider  = (props) => {

    const [user, setUser] = useState([
        {id:uuidv4(), department: 'IT Department', email: 'katlegon@nokoinc.co.za', password: 'law@noko401', name:'katlego' , surname: 'ngobeni'},
        
        
])

useEffect(()=> {
    setUser(JSON.parse(localStorage.getItem('user')))
},[])

useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
})



const sortedUser = user //.sort((a,b)=>(a.department < b.department ? -1 : 1));



const signUp = (department, email, password, name, surname) => {
    setUser([...user , {id:uuidv4(),department, email, password, name, surname}])
}

import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const LoginContext = createContext()

const LoginContextProvider  = (props) => {

    const [user, setUser] = useState([
        {id:uuidv4(), email: 'katlegon@nokoinc.co.za', password: 'law@noko401'},
        {id:uuidv4(), email: 'noko@nokoinc.co.za', password: 'thepass'},
        
])

useEffect(()=> {
    setUser(JSON.parse(localStorage.getItem('user')))
},[])

useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
})



const sortedUser = user //.sort((a,b)=>(a.department < b.department ? -1 : 1));



const getUser = (email, password) => {
    setUser([...user , {id:uuidv4(), email, password}])
}



    return (
        <LoginContext.Provider value={{sortedUser, email, password}}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider;




    return (
        <LoginContext.Provider value={{sortedUser, department, email, password, name, surname}}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider;
