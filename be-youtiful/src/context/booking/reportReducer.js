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
    CLEAR_REPORT
} from '../types'


export default (state, action) =>{
    switch(action.type){
        case GET_REPORT:
            return {
                ...state,
                reports: action.payload,
                loading: false
            }
        case ADD_REPORT:
            return {
                ...state,
                reports: [action.payload, ...state.reports ],
                loading: false
            };
        case UPDATE_REPORT:
            return{
                ...state,
                reports: state.reports.map(report => report._id === action.payload._id? 
                action.payload: report   
                 ),
                 loading: false
            };    
        case DELETE_REPORT:
            return {
                ...state,
                reports: state.reports.filter(report => report._id !== action.payload),
                loading: false
            };
        case CLEAR_REPORT:
            return {
                ...state,
                reports: null,
                filtred: null,
                error: null,
                current:null
            }    
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
         case CLEAR_CURRENT:
            return {
                ...state,
                current:null
            };    
        case FILTER_REPORT:
            return {
                ...state,
                filtered: state.reports.filter(report =>{
                    const regex = new RegExp(`${action.payload}, 'gi`);
                    return report.activity.match(regex) || report.action.match(regex)
                })
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filtered:null
            }    
        case REPORT_ERROR:
            return {
                ...state,
                error: action.payload
            };   
        default:
            return state;    
    }
}