import FriendItem from './FriendItem';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={s.list}>
            {friends.map(friend => {
                return <FriendItem avatar={friend.avatar} name={friend.name} status={friend.isOnline} key={friend.id} />
            })}
        </ul>
    )
}

export default FriendList;




