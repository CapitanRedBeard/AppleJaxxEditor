import _ from 'underscore';

const ActiveComponent = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COMPONENT':
      return {
        page: action.page,
        component: action.component
      };
    case 'SET_ACTIVE_COMPONENT':
      return {
        page: action.page,
        index: action.index,
        component: action.component
      };
    case 'SET_ACTIVE_PAGE':
      return {};
    case 'EDIT_ACTIVE_COMPONENT':
      return _.extend({}, action);
    default:
      return state;
  }
};

export default ActiveComponent;
