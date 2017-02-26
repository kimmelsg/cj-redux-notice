import { connect } from 'react-redux';
import Item from './item';

const ErrorContainer = ({ notices, dispatch, item = Item }) => {
  if (errors.length === 0) return null;
  return (
    <div className="global-notification__container">
      {notices.map(notice => React.createElement(item, { key: notice.id, notice }))}
    </div>
  );
};

export default connect(state => ({ notices: state.reduxNotice }))(ErrorContainer);
