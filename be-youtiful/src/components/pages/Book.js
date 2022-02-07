import React ,{useContext , useEffect}from  'react'
import Bookings from '../bookings/Bookings'
import AuthContext from '../../context/auth/authContext';
import { Grid,Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Pop from '../../utils/modal';
//import BookingForm from '../bookings/BookingForm';

const Book = () => {
    const {loadUser} = useContext(AuthContext)
    //const {loadClient} = authContext

    useEffect(()=> {
        loadUser();
        // eslint-disable-next-line
    },[])

    return(
        
   
    <Grid columns={1}  >
      <Grid.Row>
      <Grid.Column verticalAlign='middle' mobile="8">
      <Bookings />
      </Grid.Column>
      </Grid.Row>
    </Grid>
    
  
  
    )
}

export default Book
