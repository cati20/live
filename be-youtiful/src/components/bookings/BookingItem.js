import React, {useContext} from 'react';
import ReportContext from '../../context/booking/reportContext';
import AuthContext from '../../context/auth/authContext';
import alertContext from '../../context/alert/alertContext'
import PropTypes from 'prop-types'
import { Card, Icon, Image, Button , Message, Segment, Grid} from 'semantic-ui-react'


const BookingItem = ({report}) => {
    const reportContext =  useContext(ReportContext) 
    const authContext = useContext(AuthContext);
   // const alertContext = useContext(AlertContext)

    const {user} = authContext;
    const {deleteReport, setCurrent,clearCurrent} = reportContext;
    const { activity, description, _id, duration} = report
  const {setAlert} = alertContext

    

    const onDelete = () =>{
        deleteReport(_id);
        clearCurrent();
    }

    return(
        <Grid  columns={2} style={{ height: '50vh' ,width:'25vh' }} verticalAlign='middle' style={{backgroundColor:'#fff'}}>
        <Grid.Row>
        <Grid.Column  mobile="16">
        <Segment raised size="large">
        <Card fluid>
        <Image src='' wrapped ui={false} />
        <Card.Content>
          <Card.Header style={textOnly} >{user.name}</Card.Header>
          
          <Card.Description>
          <Message floating style={textOnly} ><Icon name='department' />Department :{user.department}</Message>
            <Message floating style={textOnly} ><Icon name='activity' />{activity}</Message>
            <Message floating style={textOnly} ><Icon name='description' />{description}</Message>
            <Message floating style={textOnly} ><Icon name='clock' />{duration}</Message>
       
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths={2}>
              <Button  color="grey" content="Edit" onClick={()=> setCurrent(report)} />
              <Button  color="pink" content="Delete" onClick={onDelete} />
          </Button.Group>
        </Card.Content>
      </Card>
      </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
    )
}

BookingItem.prototype= {
    booking : PropTypes.object.isRequired
}

const textOnly = {
  fontFamily: 'minion-pro-italic, sans-serif',
  fontStyle: 'normal',
  fontWeight: 500
}

export default BookingItem