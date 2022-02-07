import React, {useRef, useContext, useEffect} from 'react';
//import Reports from './Reports';
import {useReactToPrint} from 'react-to-print';
import { Container, Icon, Step , Header,Message} from 'semantic-ui-react'
import img from '../../images/school.png'



const Home =  ({props}) =>{

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
 

  const items = [
    'Register on the website',
    'Create dynamic timesheets',
    'View previous times',
    'Generate PDF reports ',
    'Create dynamic timesheets',
    
  ]

  const item = [
    'Get started in 3 simple steps',
    'Signup with your work email address',
    'Add you daily duties ',
    'Generate PDF reports ',
  
  ]
  
  return (
/*     //<Timeline />
    <>
    <button onClick={handlePrint} >Print Report</button>
    <div>
      
    <Reports ref={componentRef} />
  </div>
  
  </> */

//////////////////////////////////////////////////////////////
<Container>

<Header as='h2' image={img}  content='Learn More' dividing />
<Message>
    <Message.Header>Get Started</Message.Header>
    <Message.List items={item} />
  </Message>
<Step.Group widths={3}>
<Step>
  <Icon name='sign-in' />
  <Step.Content>
    <Step.Title>Sign Up</Step.Title>
  </Step.Content>
</Step>
<Step active>
  <Icon name='edit' />
  <Step.Content>
    <Step.Title>Create Timesheets</Step.Title>
  </Step.Content>
</Step>
<Step active>
  <Icon name='calendar outline' />
  <Step.Content>
    <Step.Title>Generate PDF report</Step.Title>
  </Step.Content>
</Step>
</Step.Group>
<Message>
    <Message.Header>Timesheet Web Application Features</Message.Header>
    <Message.List items={items} />
  </Message>
</Container>
/////////////////////////////////////////////////////////////////
  )  
   
}



export default Home