import { Form, Button } from "react-bootstrap"
import ReportContext from '../../context/booking/reportContext';
import React, {useContext, useState, useEffect} from 'react';
import authContext from "../../context/auth/authContext";
import alertContext from "../../context/alert/alertContext";


const AddForm = () =>{

    const reportContext = useContext(ReportContext);
    const {setAlert}= useContext(alertContext)
    const {addReport ,updateReport ,clearCurrent, current} =reportContext


    
    useEffect(()=>{
        if(current !== null){
            setReport(current)
        }else{
            setReport({
                activity: '',
                description:'',
                duration:'',
            })
        }
    }, [reportContext, current])

    const [report, setReport] =useState({
        activity: '',
        description: '',
        duration:'',
        
    })

    
   

    const {activity, description, duration} = report

    const clearForm = () => setReport({
      activity: '',
        description: '',
        duration:'',
   
    })

    const onChange = (e) => setReport({...report, [e.target.name]: e.target.value});

    const onSubmit = (e) =>{
        e.preventDefault();
        if(current === null){
          if(activity !== '' && description !=='' && duration !== ''  ){
            addReport(report);
          }else{
            setAlert('Please fill in all fields', 'danger')
          }
        }else{
            updateReport(report)
            clearForm()
        }
        clearAll();
    

    }


    const clearAll = () =>{
         clearCurrent()
    }

     return (

        <Form onSubmit={onSubmit}>
          
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="activity *"
                    name="activity"
                    value={activity}
                    onChange = { onChange}
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
                   onChange = { onChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="duration"
                    name="duration"
                    value={duration}
                   onChange = { onChange}
                />
            </Form.Group>
            <Button variant="success" type="submit" block >
                Add New Activity
            </Button>
        </Form>

     )

}


export default AddForm;