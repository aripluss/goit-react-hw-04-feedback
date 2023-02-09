// import { FeedbackOptions } from './FeedbackOptions';
// import { Statistics } from './Statistics';

export const Section = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
};
