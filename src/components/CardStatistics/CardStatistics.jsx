import PropTypes from 'prop-types';
import { Item, Label, Percentage } from './CardStatistics.styled';

export const CardStatistics = ({ label, percentage }) => {
    return (
        <Item>
            <Label>{label}</Label>
            <Percentage>{percentage}</Percentage>
        </Item>
    )
};

CardStatistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};