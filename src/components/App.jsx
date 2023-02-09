import React, { Component } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

export default class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    return (good * 100) / (good + neutral + bad);
  };

  addFeedback = event => {
    console.dir(event);
    console.dir(event.target);
    console.log(event.target.id);

    this.setState(prevState => ({
      [event.target.id]: prevState[event.target.id] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(this.state);
    const positiveFeedback = this.countPositiveFeedbackPercentage(this.state);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
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
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
