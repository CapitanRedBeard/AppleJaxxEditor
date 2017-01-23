let nextPageId = 0;

export const addPage = () => ({
  type: 'ADD_PAGE',
  name: `page${nextPageId++}`
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

export const addComponent = (page, component) => ({
  type: 'ADD_COMPONENT',
  page,
  component
});

export const setActiveComponent = (page, index, component) => ({
  type: 'SET_ACTIVE_COMPONENT',
  page,
  index,
  component
});

export const editActiveComponent = (page, index, component) => ({
  type: 'EDIT_ACTIVE_COMPONENT',
  page,
  index,
  component
});
