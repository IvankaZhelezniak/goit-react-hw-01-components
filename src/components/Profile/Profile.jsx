import PropTypes from 'prop-types';
import { ContainerProfile, Description, ImgAvatar, Name, Tag, Location, StatsProfile, StatsItem, Label, Quantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
    return <ContainerProfile>
        <Description>
            <ImgAvatar
                src={avatar}
                alt={username}
            />
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </Description>

        <StatsProfile>
            <StatsItem>
                <Label>Followers</Label>
                <Quantity>{followers}</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Views</Label>
                <Quantity>{views}</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Likes</Label>
                <Quantity>{likes}</Quantity>
            </StatsItem>
        </StatsProfile>
    </ContainerProfile>;
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};

