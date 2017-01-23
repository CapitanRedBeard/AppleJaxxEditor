import _ from 'underscore';

const Page = (state, action) => {
  switch (action.type) {
    case 'ADD_PAGE':
      return {
        key: action.name,
        name: action.name,
        layout: null,
        components: [],
        style: {}
      };
    default:
      return state;
  }
};

const Pages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PAGE':
      return [
        ...state,
        Page(undefined, action)
      ];
    default:
      return state;
  }
};

const defaultMock = {
  pages: []
};

const Mock = (state = defaultMock, action) => {
  let current;

  switch (action.type) {
    case 'ADD_PAGE':
      return _.extend({}, state, {
        pages: Pages(state.pages, action)
      });
    case 'ADD_COMPONENT':
      current = _.find(state.pages, page => page.name === action.page);
      current.components = [...current.components, action.component];

      return _.extend({}, state);
    case 'EDIT_ACTIVE_COMPONENT':
      current = _.find(state.pages, page => page.name === action.page);
      current.components[action.index] = action.component;
      current.components = [...current.components];

      return _.extend({}, state);
    case 'SET_ACTIVE_PAGE_NAME':
      current = _.find(state.pages, page => page.name === action.oldName);
      current.name = action.newName;
      current.key = action.newName;

      return state;
    default:
      return state;
  }
};

export default Mock;
