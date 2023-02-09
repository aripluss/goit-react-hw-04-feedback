import { Button } from './Button';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsKeys = Object.keys(options);

  return (
    <>
      {optionsKeys.map(optionKey => {
        return (
          <Button
            key={optionKey}
            text={optionKey}
            onLeaveFeedback={onLeaveFeedback}
          />
        );
      })}
    </>
  );
};
