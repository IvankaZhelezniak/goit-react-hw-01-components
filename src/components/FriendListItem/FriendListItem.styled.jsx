import styled from '@emotion/styled';

export const ItemFriend = styled.li`
display: flex;
  flex-direction: row;
  width: 300px;
  padding: 5px 0;
  margin-bottom: 15px;
  border-radius: 10px;
  border: 1px solid #ede5e2;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const Status = styled.span`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: ${p => p.isOnline ? "green" : "red"};
  margin-top: 25px;
  margin-right: 10px;
  margin-left: 15px;
`;

export const AvatarFriend = styled.img`
margin-right: 10px;
`;

export const NameFriend = styled.p`
  font-weight: 700;
  font-size: 24px;
`;