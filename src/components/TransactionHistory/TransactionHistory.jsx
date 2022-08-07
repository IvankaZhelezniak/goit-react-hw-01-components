import PropTypes from 'prop-types';
import { Transaction } from 'components/Transaction/Transaction';
import { Table, ThHead } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <ThHead>Type</ThHead>
                    <ThHead>Amount</ThHead>
                    <ThHead>Currency</ThHead>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <Transaction key={item.id} type={item.type} amount={item.amount} currency={item.currency} />
                ))}
            </tbody>
        </Table>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    )
};