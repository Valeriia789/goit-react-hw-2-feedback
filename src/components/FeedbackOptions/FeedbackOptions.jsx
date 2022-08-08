import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // console.log(options);

  return (
    <>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option.toUpperCase()}
        </Button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
