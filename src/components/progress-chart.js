import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import './progress.css';

const ProgressChart = ({ size, range1, range2, range3 }) => {
  const [width, setWidth] = useState(null);
  const [width2, setWidth2] = useState(null);
  const [width3, setWidth3] = useState(null);
  const [width4, setWidth4] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setWidth(`${size}%`);
      setWidth2(`${range1}%`);
      setWidth3(`${range2}%`);
      setWidth4(`${range3}%`);
    }, 1000);
  }, [size, range1, range2, range3]);

  return (
    <div className='progress-bar'>
      <div style={{ width }} className='progress'></div>
      <div style={{ width: width2 }} className='progress2'></div>
      <div style={{ width: width3 }} className='progress3'></div>
      <div style={{ width: width4 }} className='progress4'></div>
    </div>
  );
};

ProgressChart.propTypes = {
  size: propTypes.number,
  range: propTypes.number,
};

export default ProgressChart;
