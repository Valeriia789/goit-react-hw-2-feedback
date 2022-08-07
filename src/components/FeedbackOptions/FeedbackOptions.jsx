import React, { Component } from 'react';

const FeedbackOptions = () => {
  const options = ['Good', 'Neutral', 'Bad'];

  return (
    <div>
      {options.map(option => {
        <button key={option}></button>
      })}
    </div>
  );
};

export default FeedbackOptions;
