import React, { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
class Feedback extends Component {
  static defaultProps = {};
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countGood = () => {
    this.setState(
      (this.prevState = {
        good: this.state.good + 1,
      })
    );
  };

  countNeutral = () => {
    this.setState(
      (this.prevState = {
        neutral: this.state.neutral + 1,
      })
    );
  };

  countBad = () => {
    this.setState(
      (this.prevState = {
        bad: this.state.bad + 1,
      })
    );
  };

  countTotal = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositivePercentage = () => {
    return (this.state.good * 100) / this.countTotal();
  };

  render() {
    return (
      <div>
        <FeedbackOptions options={this.state} />
        {/* <div>
          <h1>Please leave feedback</h1>
          <button type="button" onClick={this.countGood}>
            Good
          </button>
          <button type="button" onClick={this.countNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.countBad}>
            Bad
          </button>
        </div> */}

        {/* <Statistics /> */}
        <div>
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotal()}</p>
          <p>Positive feedback: {this.countPositivePercentage()} %</p>
        </div>
      </div>
    );
  }
}

export default Feedback;
