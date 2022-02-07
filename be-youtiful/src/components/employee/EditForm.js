import { Form, Button } from "react-bootstrap"

import {EmployeeContext} from '../../context/employee/EmployeeContext';
import React,{useContext, useState} from 'react';

const EditForm = ({theEmployee}) =>{

    const id = theEmployee.id;

    const [department, setDepartment] = useState(theEmployee.department);
    const [activity, setActivity] = useState(theEmployee.activity);
    const [description, setDescription] = useState(theEmployee.description);
    const [duration, setDuration] = useState(theEmployee.duration);


    const {updateEmployee} = useContext(EmployeeContext);

    const updatedEmployee = {id, department, activity, description, duration}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, updatedEmployee)
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="department *"
                    name="name"
                    value={department}
                    onChange={(e)=> setDepartment(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Activity *"
                    name="activity"
                    value={activity}
                    onChange={(e)=> setActivity(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="description"
                    rows={3}
                    name="description"
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="duration"
                    name="duration"
                    value={duration}
                    onChange={(e)=> setDuration(e.target.value)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Edit Employee
            </Button>
        </Form>

     )
}

export default EditForm;