import PropTypes from 'prop-types';
import {
  TransactionItemContainer,
  TransactionItem,
} from './TransactionHistory.styled';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <TransactionItemContainer>
      <TransactionItem>{type}</TransactionItem>
      <TransactionItem>{amount}</TransactionItem>
      <TransactionItem>{currency}</TransactionItem>
    </TransactionItemContainer>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
