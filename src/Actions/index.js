let nextTodoId = 0;

export const addPage = () => ({
  type: 'ADD_PAGE',
  name: `page${nextTodoId++}`
});

export const setActivePage = name => ({
  type: 'SET_ACTIVE_PAGE',
  name
});

export const setActivePageName = (oldName, newName) => ({
  type: 'SET_ACTIVE_PAGE_NAME',
  newName,
  oldName
});
