import { removeNotice } from '../actions';

export default ({ notice }) => (
  <div className="global-notification">
    <div className="global-notification__box global-notification__box--closable">
      <div className={`global-notification__icon ss-${notice.type.icon}`} />
      <div className="global-notification__message">
        {notice.type.name}
      </div>
      <div className="global-notification__description">{notice.text}</div>
      <div
        className="global-notification__close  ss-delete"
        onClick={() => dispatch(removeNotice(notice.id))}
      />
    </div>
  </div>
);
