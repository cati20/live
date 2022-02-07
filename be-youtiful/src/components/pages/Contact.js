import React,{useState, useContext} from  'react';
import axios from 'axios';
import AlertContext from '../../context/alert/alertContext'
import { Card, Icon, Image,Form, Message, Segment, Grid} from 'semantic-ui-react'



const About = () => {
  const alertContext = useContext(AlertContext)
  const {setAlert} = alertContext
const [query, setQuery] =useState({
  name:'',
  email:'',
  cellphone:'',
  message: ''
}) 

const {name, email, message, cellphone} = query;

const clearForm = (e) => setQuery({
  name:'',
  email:'',
  cellphone:'',
  message: ''
})

const handleChange = (e) =>setQuery({...query, [e.target.name]: e.target.value});

const sendQuery = async(e,q) =>{
e.preventDefault();
  try {
     await axios.post('/api/queries',q);
      setAlert('Your Query has be submitted', 'danger')
      clearForm()
      
  } catch (error) {
    console.log(error.message)
  }
}



    return(
    <Segment size="large" raised widths="equal" style={{backgroundColor:'aqua'}}>
    <Grid verticalAlign='middle' Segment textAlign='center' stackable columns={2}>   
        <Grid.Column  > 
        <Card style={{marginTop:90}}>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header style={headers}>Puseletso</Card.Header>
          <Card.Meta>
            <span className='date' style={textOnly} >Founder</span>
          </Card.Meta>
          <Card.Description style={textOnly}>
            Puseletso is the founder of Be youtiful Nails.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Message style={textOnly} ><Icon name="phone"  />068-2929-079</Message>
          <Message style={textOnly}><Icon name="mail"  />be-younail@gmail.com</Message>
        </Card.Content>
      </Card>
      </Grid.Column>
    



 <Grid.Column >      
<Form fluid style={{marginTop:90}} onSubmit={(e) =>sendQuery(e,query)}>
<Form.Group widths='equal' block>
  <Form.Input fluid label='First name' name="name" value={name} placeholder='Full Name'onChange={handleChange} style={textOnly}/>
  <Form.Input fluid label='Email' name="email" value={email} placeholder='E-mail' onChange={handleChange} />
  <Form.Input fluid label='Cellphone' name="cellphone" value={cellphone} placeholder='Cellphone' onChange={handleChange} />

</Form.Group>

<Form.TextArea label='About'name="message" vaue={message} placeholder='Ask us any question about Be Youtiful  Nails ...' onChange={handleChange} />
<Form.Button type="submit" fluid color="teal" style={{marginTop: 15}} >Submit</Form.Button>
</Form>
</Grid.Column>
</Grid>
</Segment>
)

}


const headers = {
  fontFamily: 'myriad-pro-bold',
  fontStyle: 'normal',
  fontWeight: 800
}

const textOnly = {
  fontFamily: 'minion-pro-italic',
  fontStyle: 'bold',
  fontWeight: 700
}
export default About