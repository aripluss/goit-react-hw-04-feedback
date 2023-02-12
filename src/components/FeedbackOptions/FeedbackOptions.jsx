import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { StyledButtonsContainer } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback = () => {} }) => {
  return (
    <StyledButtonsContainer>
      {options.map(optionKey => {
        return (
          <Button
            key={optionKey}
            text={optionKey}
            onLeaveFeedback={() => onLeaveFeedback(optionKey)}
          />
        );
      })}
    </StyledButtonsContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
