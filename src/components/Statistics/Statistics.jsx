import React, { Component } from 'react';

const Statistics = () => {
  <div>
    <h2>Statistics</h2>
    <p>Good: {this.state.good}</p>
    <p>Neutral: {this.state.neutral}</p>
    <p>Bad: {this.state.bad}</p>
    <p>Total: {this.countTotal()}</p>
    <p>Positive feedback: {this.countPositivePercentage()} %</p>
  </div>;
};

export default Statistics;
