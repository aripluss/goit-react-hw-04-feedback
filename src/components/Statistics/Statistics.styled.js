import styled from 'styled-components';

export const StyledStatisticsTitle = styled.h2`
  margin-bottom: 15px;
  letter-spacing: 2px;
`;

export const StyledStatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .statistics__rank {
    &.good {
      color: var(--button-color-good);
    }

    &.neutral {
      color: var(--button-color-neutral);
    }

    &.bad {
      color: var(--button-color-bad);
    }

    &.total,
    &.positivePercentage {
      font-weight: 600;
    }
  }

  & .quantity {
    color: var(--main-text-color);
    margin-left: 5px;
  }
`;
