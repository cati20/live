import React, {useContext} from 'react';
import AlertContext from '../../context/alert/alertContext';
import {faCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Alerts = () =>{
    const alertContext =  useContext(AlertContext)

    const {alerts} = alertContext
    return (
        alerts.length > 0 && alerts.map(alert =>(
            <div key={alert.id} className={`alert alert-${alert.type}`}>
                <FontAwesomeIcon icon={faCircle} /> {alert.msg}
            </div>
        ))
    );
};

export default Alerts