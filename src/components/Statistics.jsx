export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <h2>Statistics</h2>

      <ul className="statistics__widget">
        <li className="statistics__item">
          <p className="statistics__rank good">
            Good:<span className="quantity">{good}</span>
          </p>
        </li>
        <li className="statistics__item">
          <p className="statistics__rank neutral">
            Neutral:<span className="quantity">{neutral}</span>
          </p>
        </li>
        <li className="statistics__item">
          <p className="statistics__rank bad">
            Bad:<span className="quantity">{bad}</span>
          </p>
        </li>
        <li className="statistics__item">
          <p className="statistics__rank bad">
            Total:<span className="quantity">{total}</span>
          </p>
        </li>
        <li className="statistics__item">
          <p className="statistics__rank bad">
            Positive feedback:
            <span className="quantity">{positivePercentage.toFixed()}%</span>
          </p>
        </li>
      </ul>
    </>
  );
};
