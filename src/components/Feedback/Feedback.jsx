import React, { Component } from 'react';

class Feedback extends Component {
  static defaultProps = {};
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(
      (this.prevState = {
        good: this.state.good + 1,
      })
    );
  };

  handleNeutral = () => {
    this.setState(
      (this.prevState = {
        neutral: this.state.neutral + 1,
      })
    );
  };

  handleBad = () => {
    this.setState(
      (this.prevState = {
        bad: this.state.bad + 1,
      })
    );
  };

  render() {
    return (
      <div>
        <div>
          <h1>Please leave feedback</h1>
          <button type="button" onClick={this.handleGood}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBad}>
            Bad
          </button>
        </div>

        <div>
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
        </div>
      </div>
    );
  }
}

export default Feedback;
