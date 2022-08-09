import PropTypes from 'prop-types';
import { StatisticInfo } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <StatisticInfo>Good: {good} </StatisticInfo>
      <StatisticInfo>Neutral: {neutral} </StatisticInfo>
      <StatisticInfo>Bad: {bad} </StatisticInfo>
      <StatisticInfo>Total: {total} </StatisticInfo>
      <StatisticInfo>Positive feedback: {positivePercentage} %</StatisticInfo>
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

export default Statistics;
