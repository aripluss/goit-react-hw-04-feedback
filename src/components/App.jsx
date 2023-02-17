import React, { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    return Math.round((good * 100) / (good + neutral + bad) || 0);
  };

  const addFeedback = optionKey => {
    switch (optionKey) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        break;
    }
  };

  const total = countTotalFeedback({ good, neutral, bad });
  const positiveFeedback = countPositiveFeedbackPercentage({
    good,
    neutral,
    bad,
  });
  const optionsKeys = Object.keys({ good, neutral, bad });

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={optionsKeys} onLeaveFeedback={addFeedback} />

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
