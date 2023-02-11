import PropTypes from 'prop-types';
import {
  StyledStatisticsList,
  StyledStatisticsTitle,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StyledStatisticsTitle>Statistics</StyledStatisticsTitle>

      <StyledStatisticsList>
        <li>
          <p className="statistics__rank good">
            Good:<span className="quantity">{good}</span>
          </p>
        </li>
        <li>
          <p className="statistics__rank neutral">
            Neutral:<span className="quantity">{neutral}</span>
          </p>
        </li>
        <li>
          <p className="statistics__rank bad">
            Bad:<span className="quantity">{bad}</span>
          </p>
        </li>
        <li>
          <p className="statistics__rank total">
            Total:<span className="quantity">{total}</span>
          </p>
        </li>
        <li>
          <p className="statistics__rank positivePercentage">
            Positive feedback:
            <span className="quantity">{positivePercentage}%</span>
          </p>
        </li>
      </StyledStatisticsList>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
