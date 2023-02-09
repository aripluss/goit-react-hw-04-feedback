export const Button = ({ text, onLeaveFeedback }) => {
  // console.log(onLeaveFeedback);
  return (
    <button type="button" id={text} onClick={onLeaveFeedback}>
      {text}
    </button>
    // <button type="button" onClick={() => onLeaveFeedback()}>
    // {text}
    // </button>
  );
};
