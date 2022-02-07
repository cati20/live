import React, {useContext, useRef, useEffect} from 'react'
import ReportCotext from '../../context/booking/reportContext';

const BookingFilter = () =>{
    const reportContext = useContext(ReportCotext);
    const {filterReport, clearFilter, filtered} = reportContext

    const text = useRef();

    useEffect(()=> {
        if(filtered === null){
            text.current.value = '';
        }
    })

    const onChange = (e) =>{
        if(text.current.value !== ''){
            filterReport(e.target.value)
        }else{
            clearFilter();
        }
    }



    return (
        <form>
            <input  ref={text} type="text" placeholder="search bookings...." onChange={onChange} />
        </form>
    )
}

export default BookingFilter;