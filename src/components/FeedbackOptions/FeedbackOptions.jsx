const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // console.log(options);

  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
