export const ADD_NOTICE = 'ADD_NOTICE';
export const REMOVE_NOTICE = 'REMOVE_NOTICE';
export const CLEAR_NOTICES = 'CLEAR_NOTICES';

const types = {
  error: {
    icon: 'caution',
    name: 'Error',
  },
  warning: {
    icon: 'alert',
    name: 'Warning',
  },
  success: {
    icon: 'check',
    name: 'Success',
  },
};

export function addNotice({ type = types.error, ...data }) {
  return {
    type: ADD_NOTICE,
    data: {
      type,
      ...data,
    },
  };
}

export function removeNotice(id) {
  return {
    type: REMOVE_NOTICE,
    id,
  };
}

export function clearNotices() {
  return {
    type: CLEAR_NOTICES,
  };
}
