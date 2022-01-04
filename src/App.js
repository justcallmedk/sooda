import React, { useEffect, useState } from 'react';
import Forecast from './components/Forecast';
import Result from './components/Result';
import './App.css';

function App() {
  const [forecast, setForecast] = useState(null);

  const forecastReady = (forecast) => {
    setForecast(forecast);
  };

  const next = () => {
    console.info('next');
  };

  return (
    <div className="App">
      <div className="header">
        welcome to sooda.io
      </div>
      <div className="header2">
        forecast
      </div>
      <Forecast onForecastReady={forecastReady}>forecast</Forecast>
      { forecast &&
        <div>
          <div className="header2">
            Result
          </div>
          <Result forecast={forecast}>result</Result>
        </div>
      }
    </div>
  );
}

export default App;
