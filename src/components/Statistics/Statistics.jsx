import PropTypes from 'prop-types';
import { StatisticsTitle } from 'components/StatisticsTitle/StatisticsTitle';
import { CardStatistics } from 'components/CardStatistics/CardStatistics';
import { SectionStatistics, StatList } from './Statistics.styled';

export const Statistics = ({ stats }) => {
  return (
    <SectionStatistics>
      <StatisticsTitle title="Upload stats" />
      <StatList>
        {stats.map(stat => (
          <CardStatistics
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </StatList>
    </SectionStatistics>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
