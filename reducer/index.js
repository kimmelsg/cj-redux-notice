import { ADD_NOTICE, REMOVE_NOTICE, CLEAR_NOTICES } from '../actions';

export default function notices(state = [], action) {
  switch (action.type) {
    case ADD_NOTICE:
      return addNotice(state, action);
    case REMOVE_NOTICE:
      return removeNotice(state, action);
    case CLEAR_NOTICES:
      return [];
    default:
      return state;
  }
}

const removeNotice = (state, action) => {
  let newState = state.filter(item => item.id !== action.id);

  if (state.length === newState.length) return state;
  return newState;
};

const addNotice = (state, action) => {
  if (state.find(item => item.id === action.id)) return state;
  return [action.data, ...state];
};
