import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    return Math.round((good * 100) / (good + neutral + bad) || 0);
  };

  addFeedback = optionKey => {
    this.setState(prevState => ({
      [optionKey]: prevState[optionKey] + 1,
    }));
  };

  // addFeedback = event => {
  //   this.setState(prevState => ({
  //     [event.target.id]: prevState[event.target.id] + 1,
  //   }));
  // };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(this.state);
    const positiveFeedback = this.countPositiveFeedbackPercentage(this.state);
    const optionsKeys = Object.keys(this.state);

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionsKeys}
          onLeaveFeedback={this.addFeedback}
        />

        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          />
        ) : (
          <Notification message="There is no feedback yet." />
        )}
      </Section>
    );
  }
}
