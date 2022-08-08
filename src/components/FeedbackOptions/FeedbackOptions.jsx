const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // console.log(options);

  return (
    <>
      {options.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;
