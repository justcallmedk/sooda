import React, { useEffect, useState } from 'react';

function Result(props) {
  const [results, setResults] = useState(null);
  useEffect(() => {
    create();
  }, []);

  const create = () => {
    console.info('create days');
    const results_ = [];
    for( const day in props.forecast) {
      results_.push(
        <div key={day + '_key'}
             className="day">
          <div className="result">
            0 mm
          </div>
        </div>
      );
    }
    setResults(results_);
  };
  return (
    <div>{results}</div>
  );
}

export default Result;
