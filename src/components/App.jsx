import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  // onLeaveFeedback = event => {
  //   const feedbackOption = event.target.name;
  //   this.setState(prevState => ({
  //     [feedbackOption]: prevState[feedbackOption] + 1,
  //   }));
  // };

  // в onLeaveFeedback повинен приходити зразу відгук,
  // а не івент (так як при видаленні контакту ти id передаєш в телефонній книзі)

  onLeaveFeedback = feedback => {
    const feedbackOptions = Object.keys(this.state);
    const optionValues = Object.values(this.state);

    console.log(feedbackOptions);
    console.log(optionValues);
    console.log(feedback.target.name);

    this.setState(prevState => {
      return {
        [feedback.target.name]: prevState[feedback.target.name] + 1,
      };
    });
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

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {this.countTotal() === 0 ? (
          <Notification message="There is no feedback yet :( " />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotal()}
              positivePercentage={this.countPositivePercentage()}
            />
          </Section>
        )}
      </div>
    );
  }
}

export default App;
