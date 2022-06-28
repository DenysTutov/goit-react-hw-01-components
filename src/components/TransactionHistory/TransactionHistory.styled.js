import styled from 'styled-components';

export const TransactionHistoryList = styled.table`
  width: 655px;
  margin: 0 auto 50px;
  border-spacing: 1px;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  overflow: hidden;
`;

export const TransactionListNameContainer = styled.thead`
  height: 40px;
  background-color: #00bcd5;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const TransactionListNameRow = styled.tr``;

export const TransactionListName = styled.th`
  width: calc(100% / 3);
`;

export const TransactionItemContainer = styled.tr`
  background-color: #fff;

  :nth-child(even) {
    background-color: #ecf1f3;
  }
`;

export const TransactionItem = styled.td`
  height: 40px;
  font-size: 12px;
  text-align: center;
  text-transform: capitalize;
  color: #96999b;

  :first-child {
    text-align: left;
    text-indent: 90px;
  }
`;
