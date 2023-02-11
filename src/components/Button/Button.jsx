import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ({ text, onLeaveFeedback = () => {} }) => {
  return (
    <StyledButton type="button" id={text} onClick={onLeaveFeedback}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
