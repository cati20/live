import React, {useContext} from 'react';
import reportContext from '../../context/booking/reportContext';
import Card from '../employee/pdfheader';
import './style.scss';



export const Reports = React.forwardRef((props, ref) => {

  const {reports} = useContext(reportContext)


 
  return (
    <div ref={ref} className=' back'>
      
        <div className="row">
        {
        reports ?
        <div className='col-lg-12'>
            <div className="card">
            <div className="content">
                <h5 className="card-title">{props.report.activity}</h5>
                <p className="card-text text-wrap">{ props.report.description}</p>
                <p className='card-footer'>{props.report.duration}</p>
            </div>
            </div>
            </div>
           :
           <Card /> 
        }
 
        </div>
    </div>
  );
});




export default Reports;