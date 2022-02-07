import React ,{useState, useContext, useEffect} from 'react';
import ReportContext from '../../context/booking/reportContext';
import AlertContext from '../../context/alert/alertContext'
import { Grid,  Segment, Form, Button, TextArea } from 'semantic-ui-react';




const BookingForm = () =>{

    const reportContext = useContext(ReportContext);
    const {setAlert}= useContext(AlertContext)
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

    return(
         <Grid  style={{ height: '100vh' }} verticalAlign='middle' style={{backgroundColor:'#e7e7e7'}}>
    <Grid.Column style={{ maxWidth: 450 }} >
      
        <h2 style={headers}>{current? "Update Activity" : "Add an Activity"}</h2>
        
      
      <Form size='small' onSubmit={onSubmit}>
        <Segment raised >
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Activity' value={activity} name="activity" onChange={onChange} />
          <TextArea  fluid icon='user' iconPosition='left' placeholder='Description' type='text-area'  value={description} name="description" onChange={onChange} />
          <Form.Input fluid icon='clock' iconPosition='left' placeholder="duration" type="time" value={duration} name="duration" onChange={onChange} />
          
          <Button color='teal' fluid size='large'type="submit">
          {current? "Update" : "Report"}
          </Button>
        </Segment>
      </Form>
      {current !== null ? <Button color="grey" fluid size='large' onClick={clearForm}>Clear</Button> : <div></div>}
    </Grid.Column>
  </Grid>
        
    )
}

const headers = {
  fontFamily: 'myriad-pro-light, serif',
  fontStyle: 'normal',
  fontWeight: 900,
  color: '#E03996'
  
}


export default BookingForm;
