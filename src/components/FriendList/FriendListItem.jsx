import PropTypes from 'prop-types';
import { FriendItem, Status, Avatar, Name } from './FriendList.styled';

export const FriendListItem = ({ friend }) => {
  return (
    <FriendItem>
      <Status isOnline={friend.isOnline} />
      <Avatar src={friend.avatar} alt={friend.name} width="60" />
      <Name>{friend.name}</Name>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
