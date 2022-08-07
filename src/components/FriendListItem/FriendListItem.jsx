import PropTypes from 'prop-types';
import { ItemFriend, Status, AvatarFriend, NameFriend } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ItemFriend>
      <Status isOnline={isOnline}></Status>
      <AvatarFriend src={avatar} alt={name} width="58" />
      <NameFriend>{name}</NameFriend>
    </ItemFriend>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
