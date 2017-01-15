import _ from 'underscore';

const Page = (state, action) => {
  switch (action.type) {
    case 'ADD_PAGE':
      return {
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
  switch (action.type) {
    case 'ADD_PAGE':
      return _.extend({}, state, {
        pages: Pages(state.pages, action)
      });
    default:
      return state;
  }
};

export default Mock;
