import PropTypes from 'prop-types';
import getRandomColor from '../Statistics/randomColor';
import s from './StatisticsItem.module.css';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <li className={s.item} style={{ backgroundColor: getRandomColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
