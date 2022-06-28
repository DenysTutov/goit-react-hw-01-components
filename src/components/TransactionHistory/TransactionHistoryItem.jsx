import PropTypes from 'prop-types';
import {
  TransactionItemContainer,
  TransactionItem,
} from './TransactionHistory.styled';

export const TransactionHistoryItem = ({ item }) => {
  return (
    <TransactionItemContainer>
      <TransactionItem>{item.type}</TransactionItem>
      <TransactionItem>{item.amount}</TransactionItem>
      <TransactionItem>{item.currency}</TransactionItem>
    </TransactionItemContainer>
  );
};

TransactionHistoryItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
