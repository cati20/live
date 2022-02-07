import React from 'react';
import Login from '../auth/Login';



const Landing = () =>{
    
     
    return(
     
      <div>
        <h4 style={{textAlign:"center"}}> Noko Ramaboya Attorneys Inc</h4>
        <Login />
      </div>

    )
}


const textOnly = {
    fontFamily: 'minion-pro-italic, sans-serif',
    fontStyle: 'normal',
    fontWeight: 500,
    textAlign: 'center'
  }

  const headers = {
    fontFamily: 'myriad-pro-bold',
    fontStyle: 'normal',
    fontWeight: 800
  }

export default Landing;