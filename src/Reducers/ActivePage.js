const ActivePage = (state = null, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_PAGE':
      return action.name;
    case 'SET_ACTIVE_PAGE_NAME':
      return action.newName;
    default:
      if (state === null && action.type === 'ADD_PAGE') {
        return action.name;
      }

      return state;
  }
};

export default ActivePage;
