import styled from 'styled-components';

export const StyledButton = styled.button`
  min-width: 150px;
  border-radius: 2px;
  text-transform: capitalize;
  padding: 10px 30px;
  position: relative;
  border: 2px solid var(--button-text-color);
  color: var(--button-text-color);
  background-color: var(--button-bgr);
  transition: color 0.4s ease, background-color 0.4s ease;

  &#good {
    background-color: var(--button-color-good);
  }

  &#neutral {
    background-color: var(--button-color-neutral);
  }

  &#bad {
    background-color: var(--button-color-bad);
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    border: 2px solid rgba(0, 0, 0, 0);
    transition: 0.4s;
  }

  &:hover:after,
  &:focus-visible:after {
    width: calc(100% - 10px);
    height: calc(100% + 10px);
  }

  &#good:hover,
  &#good:focus-visible,
  &#neutral:hover,
  &#neutral:focus-visible,
  &#bad:hover,
  &#bad:focus-visible {
    background-color: transparent;
    outline: none;
  }

  &#good:hover,
  &#good:focus-visible,
  &#good:hover:after,
  &#good:focus-visible:after {
    border-color: var(--button-color-good);
    color: var(--button-color-good);
  }

  &#neutral:hover,
  &#neutral:focus-visible,
  &#neutral:hover:after,
  &#neutral:focus-visible:after {
    border-color: var(--button-color-neutral);
    color: var(--button-color-neutral);
  }

  &#bad:hover,
  &#bad:focus-visible,
  &#bad:hover:after,
  &#bad:focus-visible:after {
    border-color: var(--button-color-bad);
    color: var(--button-color-bad);
  }
`;
