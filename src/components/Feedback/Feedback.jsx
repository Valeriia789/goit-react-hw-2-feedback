import React, { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
class Feedback extends Component {
  static defaultProps = {};
  static propTypes = {};

  // Стан оголошується в конструкторі, оскільки це перше, що відбувається,
  //  коли створюється екземпляр класу.
  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  onLeaveFeedback = event => {
    const feedbackOption = event.target.name;
    // console.log(event.target.name);

    this.setState(prevState => ({
      [feedbackOption]: prevState[feedbackOption] + 1,
    }));
  };

  countTotal = () => {
    return Object.values(this.state).reduce((previousValue, newFeedback) => {
      return previousValue + newFeedback;
    }, 0);
    // return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositivePercentage = () => {
    const total = (this.state.good * 100) / this.countTotal();
    return Math.round(total) >= 0 ? Math.round(total) : 0;
  };

  render() {
    const options = Object.keys(this.state);
    // console.log(Object.keys(this.state));
    // const feedbacks = Object.values(this.state);
    // console.log(Object.values(this.state));

    return (
      <div>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotal()}
          positivePercentage={this.countPositivePercentage()}
        />
      </div>
    );
  }
}

export default Feedback;
