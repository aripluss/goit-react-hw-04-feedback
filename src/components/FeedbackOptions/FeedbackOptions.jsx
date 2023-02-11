import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { StyledButtonsContainer } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback = () => {} }) => {
  const optionsKeys = Object.keys(options);

  return (
    <StyledButtonsContainer>
      {optionsKeys.map(optionKey => {
        return (
          <Button
            key={optionKey}
            text={optionKey}
            onLeaveFeedback={onLeaveFeedback}
          />
        );
      })}
    </StyledButtonsContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    bad: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
