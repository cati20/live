const resp = {
    data: [
      {tempoGasto: '05:00'},
      {tempoGasto: '01:00'},
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
  
  
console.log(sumHoras.join(':'));