import React, { useEffect, useState } from 'react';

function Forecast(props) {
  const [forecasts, setForecasts] = useState(null);

  const daysMap = {
    mon : {},
    tue : {},
    wed : {},
    thu : {},
    fri : {},
    sat : {},
    sun : {}
  }

  useEffect(() => {
    generate();
    create();
  }, []);

  //TODO move to server side
  const generate = () => {
    const MAX_AMOUNT = 35;
    const precipRanges = [0,20,40,60,80,100]
    let amountSoFar = 0;
    let lastRainedOn;
    for(const day in daysMap) {
      daysMap[day].amount = 0;
      const precip = precipRanges[Math.floor(Math.random() * 5)];
      daysMap[day].precip = precip;
      if(precip > 0) {
        lastRainedOn = day;
      }

      if(amountSoFar >= MAX_AMOUNT || daysMap[day].precip === 0) { //if max amount
        //do nothing
      }
      else if(day === 'sun') { //if last day
        daysMap[lastRainedOn].amount += (MAX_AMOUNT - amountSoFar);
      }
      else {
        let amount = Math.floor(Math.random() * 10);
        amount = amount === 0 ? amount + 1 : amount;
        amountSoFar += amount;
        daysMap[day].amount = amount;
      }
    }
    props.onForecastReady(daysMap);
  }

  const create = () => {
    console.info('create days');
    const forecasts_ = [];
    for( const day in daysMap) {
      forecasts_.push(
        <div key={day + '_key'}
             className="day"
             onClick={() => {
               //console.info('setting precipt');
               //setPrecip({mon:'10'});
             }}>
          <div className="heading">
            {day}
          </div>
          <div className="precip">
            {daysMap[day].precip} %
          </div>
          <div className={'amount ' + (daysMap[day].amount > 0  ? 'highlight' : '')}>
            {daysMap[day].amount} mm
          </div>
        </div>
      );
    }
    setForecasts(forecasts_);
  };

  return (
    <div className="forecast">
      {forecasts}
    </div>
  );
}

export default Forecast;
