import s from './FriendItem.module.css';

const FriendItem = ({ avatar, name, status }) => {
    return (
        <li className={s.item}>
            <div style={{width: '16px', height: '16px', borderRadius: '8px', background: status ? 'green' : 'red'}} className="status">{ status}</div>
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
        </li>
    )
}

export default FriendItem;