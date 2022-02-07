import React, {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext()

const EmployeeContextProvider  = (props) => {

    const [employees, setEmployees] = useState([
        {id:uuidv4(), department: 'Read emails', activity: 'thomashardy@mail.com', description: '89 Chiaroscuro Rd, Portland, USA', duration: '(171) 555-2222'},
        {id:uuidv4(), department: 'Dominique Perrier', activity: 'dominiqueperrier@mail.com', description: 'Obere Str. 57, Berlin, Germany', duration: '(313) 555-5735'},
        {id:uuidv4(), department: 'Maria Anders', activity: 'mariaanders@mail.com', description: '25, rue Lauriston, Paris, France', duration: '(503) 555-9931'},
        {id:uuidv4(), department: 'Fran Wilson', activity: 'franwilson@mail.com', description: 'C/ Araquil, 67, Madrid, Spain', duration: '(204) 619-5731'},
        {id:uuidv4(), department: 'Martin Blank', activity: 'martinblank@mail.com', description: 'Via Monte Bianco 34, Turin, Italy', duration: '(480) 631-2097'}
])

useEffect(()=> {
    setEmployees(JSON.parse(localStorage.getItem('employees')))
},[])

useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
})



const sortedEmployees = employees //.sort((a,b)=>(a.department < b.department ? -1 : 1));



const addEmployee = (department, activity, description, duration) => {
    setEmployees([...employees , {id:uuidv4(), department, activity, description, duration}])
}

const deleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id))
}

const updateEmployee = (id, updatedEmployee) => {
    setEmployees(employees.map((employee) => employee.id === id ? updatedEmployee : employee))
}

    return (
        <EmployeeContext.Provider value={{sortedEmployees, addEmployee, deleteEmployee, updateEmployee}}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;
