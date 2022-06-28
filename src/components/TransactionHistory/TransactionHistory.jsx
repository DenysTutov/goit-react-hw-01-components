import PropTypes from 'prop-types';
import { TransactionHistoryItem } from './TransactionHistoryItem';
import {
  TransactionHistoryList,
  TransactionListNameContainer,
  TransactionListName,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryList>
      <TransactionListNameContainer>
        <tr>
          <TransactionListName>Type</TransactionListName>
          <TransactionListName>Amount</TransactionListName>
          <TransactionListName>Currency</TransactionListName>
        </tr>
      </TransactionListNameContainer>

      <tbody>
        {items.map(item => {
          return <TransactionHistoryItem key={item.id} item={item} />;
        })}
      </tbody>
    </TransactionHistoryList>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};
