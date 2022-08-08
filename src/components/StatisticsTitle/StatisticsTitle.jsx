import PropTypes from 'prop-types';
import { Title } from './StatisticsTitle.styled';

export const StatisticsTitle = ({ title }) => {
  return title && <Title>{title}</Title>;
};

StatisticsTitle.propTypes = {
  title: PropTypes.string,
};
