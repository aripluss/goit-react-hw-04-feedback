import styled from 'styled-components';

export const StyledSection = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const StyledSectionContainer = styled.div`
  padding: 20px 0;
  border-top: 2px solid rgba(0, 0, 0, 0.05);

  border-bottom: 2px solid rgba(0, 0, 0, 0.05);
  text-align: center;
`;

export const StyledSectionTitle = styled.h1`
  display: block;
  position: relative;
  width: auto;
  letter-spacing: 2px;
  margin: 7px 0;

  &:before {
    content: '';
    position: absolute;
    top: -5%;
    left: 30px;
    width: 30px;
    height: 20px;
    border-top: 2px solid var(--accent-color);
    border-left: 2px solid var(--accent-color);

    @media screen and (min-width: 768px) {
      top: -15%;
      left: 170px;
    }

    @media screen and (min-width: 1280px) {
      top: -15%;
      left: 425px;
    }
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -5%;
    right: 30px;
    width: 30px;
    height: 20px;
    border-bottom: 2px solid var(--accent-color);
    border-right: 2px solid var(--accent-color);

    @media screen and (min-width: 768px) {
      bottom: -15%;
      right: 170px;
    }

    @media screen and (min-width: 1280px) {
      bottom: -15%;
      right: 425px;
    }
  }
`;
