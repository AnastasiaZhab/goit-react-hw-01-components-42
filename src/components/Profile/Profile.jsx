import s from './Profile.module.css'
import PropTypes from 'prop-types'

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (<div className={s.profile}>
    <div className={s.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={s.avatar}
      />
      <p className={s.name}>{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className={s.stats}>
      <li>
        <span className="label">Followers</span>
        <span className={s.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className={s.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className={s.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>)
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.isRequired,
  }
  )
}

export default Profile;