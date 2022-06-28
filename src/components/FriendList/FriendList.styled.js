import styled from 'styled-components';

export const FriendListContainer = styled.ul`
  width: 275px;
  margin: 0 auto 50px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;

  width: 100%;
  height: 77px;
  background-color: #fff;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
`;

export const Status = styled.span`
  display: inline-flex;
  width: 15px;
  height: 15px;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
  margin-right: 10px;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  display: block;
  width: 60px;
  height: 60px;
  background-color: #212121;
  border-radius: 5px;
  margin-right: 15px;
`;

export const Name = styled.p`
  font-size: 20px;
`;
