import React, { useReducer } from "react";
import reportContext from './reportContext';
import reportReducer from './reportReducer';
import {
    ADD_REPORT,
    DELETE_REPORT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_REPORT,
    FILTER_REPORT,
    CLEAR_FILTER,
    REPORT_ERROR,
    GET_REPORT,
    CLEAR_REPORT,
    //BOOKING_ERROR
} from '../types'
import Axios from "axios";
 
const ReportState = props =>{
    const initialState ={
        reports:null,
        current: null,
        filtered: null,
        error: null
    };

    const [state, dispatch] = useReducer(reportReducer, initialState);

    //Get Reports
    const getReport = async () =>{
        
        try {
            const res = await Axios.get('/api/report');
            dispatch({
                 type: GET_REPORT, 
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type:REPORT_ERROR,
                payload: err.response.data.msg
            })
        }
    }

    //add report
    const addReport = async report =>{
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await Axios.post('/api/report', report, config);
            dispatch({
                 type: ADD_REPORT, 
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type:REPORT_ERROR,
                payload: err.response.data.msg
            })
        }

        
    }

    //delete booking
    const deleteReport =async id =>{
        try {
            await Axios.delete(`/api/report/${id}`);
            dispatch({
                 type: DELETE_REPORT,
                  payload: id 
                })
            
        } catch (err) {
            dispatch({
                type:REPORT_ERROR,
                payload: err.response.data.msg
            })
        }
        
    }

    //update booking
    const updateReport = async (report)=>{
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await Axios.put(`/api/report/${report._id}`, report, config);
            dispatch({
                 type: UPDATE_REPORT,
                  payload: res.data
                })

        } catch (err) {
            dispatch({
                type:REPORT_ERROR,
                payload: err.response.data.msg
            })
            console.log(err.response.data.msg)
        }
        
        
    }

    //Clear Bookings
    const clearReport = () =>{
        dispatch({
            type: CLEAR_REPORT
        })
    }

    //set current booking
    const setCurrent = report =>{
        
        dispatch({ type: SET_CURRENT, payload: report })
    }
    //clear current booking
    const clearCurrent = ()=>{
        
        dispatch({ type: CLEAR_CURRENT})
    }
    

    //filter booking
    const filterReport= (text)=>{
        
        dispatch({ type: FILTER_REPORT, payload: text})
    }
    //clear filter
    const clearFilter = ()=>{
        
        dispatch({ type: CLEAR_FILTER})
    }
    
    return(
        <reportContext.Provider
            value={{
                reports : state.reports,
                current: state.current,
                filtered: state.filtered,
                error: state.error,
                addReport,
                deleteReport,
                setCurrent,
                clearCurrent,
                updateReport,
                filterReport,
                clearFilter, getReport,
                clearReport
            }}
        >
            {props.children}
        </reportContext.Provider>
    )


}


export default ReportState;
