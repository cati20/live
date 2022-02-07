import React, { Fragment ,useContext , useEffect} from  'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import BookingItem from './BookingItem'
import ReportContext from '../../context/booking/reportContext';
import Spinner from '../layout/Spinner';
import { Grid } from 'semantic-ui-react';
//import Reports from '../pages/Reports';

const Bookings = () => {
    const reportContext = useContext(ReportContext);

    const { reports,  getReport, loading} = reportContext;

    useEffect( ()=>{
        getReport();
        // eslint-disable-next-line
    }, [])

    if(reports !== null && reports.length=== 0 && !loading){
        return <h4 style={headers}> Please add an Activity</h4>
    }
/////////////////////////////////////////////////////////////////////////////////////




const resp = {
    data: [
      {tempoGasto: '05:00'},
      {tempoGasto: '01:09'},
      {tempoGasto: '09:35'},
      {tempoGasto: '05:05'}
     
    ]
  };
  
  
  const sumHoras = [0, 0];

 for (let i=0; i < resp.data.length; i++){
    const [hours, minutes] = resp.data[i].tempoGasto.split(':').map(s => parseInt(s, 10)); 

    
    
    // hours
    sumHoras[0] += hours;

  const  sumMinutes = minutes;
    
    // minutes
    if ((sumHoras[i] + minutes) > 59) {
      const diff = sumHoras[1] + minutes - 60;
      sumHoras[0] += 1;
      sumMinutes[1] = diff;
    } else {
      sumHoras[1] += minutes;
    }
  }
  
  
//console.log(sumHoras.join(':'));
/////////////////////////////////////////////////////////////////////////////////////


      





    return (
      <Grid columns={1} style={{textAlign: 'center', width: '100%', display :'flex'}}  >
            {reports !== null && !loading ? (
              <Grid.Row>
                    <Grid.Column>

                    {reports.map(report => (
                          
                        <CSSTransition classNames="item" key={report._id}timeout={500}>
                            
                      <BookingItem  report={report}/> 
                        {/* <Reports report={report}/> */}
                        </CSSTransition>
                    ))}

                    </Grid.Column>
                    </Grid.Row>
            ) : <Spinner />}
          
        </Grid>
    )
}


    const headers = {
        fontFamily: 'myriad-pro-light, serif',
        fontStyle: 'normal',
        fontWeight: 500,
        color: '#E03996'
    }


export default Bookings;