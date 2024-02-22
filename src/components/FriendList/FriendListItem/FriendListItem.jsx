import css from './FriendListItem.module.css';
export default function FriendListItem({ id, name, avatar, status }) {
  return (
    <li className={css.item} key={id}>
      <span
        className={css.isOnline}
        style={{ backgroundColor: status ? 'green' : 'red' }}
      >
        {status}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
