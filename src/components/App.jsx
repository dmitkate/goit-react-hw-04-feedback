import React from 'react';
import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import { Control } from './Control';
import { Section } from './Section';
import { Notificstion } from './Notification';
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const click = e => {
    switch (e.target.dataset.action) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          onLeaveFeedback={click}
          options={['good', 'neutral', 'bad']}
        />
      </Section>

      <Section title={'Statistics'}>
        {countTotalFeedback() ? (
          <Control
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percent={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notificstion message={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
};

export default App;
