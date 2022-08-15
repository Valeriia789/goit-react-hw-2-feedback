import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const feedbacks = Object.keys(options);
  return (
    <>
      {feedbacks.map(feedback => (
        <Button
          key={feedback}
          type="button"
          name={feedback}
          onClick={() => onLeaveFeedback(feedback)}
        >
          {feedback.toUpperCase()}
        </Button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
