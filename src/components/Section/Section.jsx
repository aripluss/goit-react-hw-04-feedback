import PropTypes from 'prop-types';
import {
  StyledSection,
  StyledSectionContainer,
  StyledSectionTitle,
} from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <StyledSectionContainer className="container">
        <StyledSectionTitle>{title}</StyledSectionTitle>
        {children}
      </StyledSectionContainer>
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
