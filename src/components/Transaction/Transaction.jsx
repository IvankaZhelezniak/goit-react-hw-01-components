import PropTypes from 'prop-types';
import { TdTbody, TrTbody } from './Transaction.styled';

export const Transaction = ({ type, amount, currency }) => {
    return (
        <TrTbody>
            <TdTbody>{type}</TdTbody>
            <TdTbody>{amount}</TdTbody>
            <TdTbody>{currency}</TdTbody>
        </TrTbody>
    )
};

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
};