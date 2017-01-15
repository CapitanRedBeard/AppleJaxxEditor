const ActivePage = (state = null, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_PAGE':
      return action.name;
    default:
      return state;
  }
};

export default ActivePage;
