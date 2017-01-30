let nextPageId = 0;

// Page Actions
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

// Component Actions
export const addComponent = (page, index, component) => ({
  type: 'ADD_COMPONENT',
  page,
  index,
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

// Drawer Actions
export const setDrawerSide = (side, page) => ({
  type: 'SET_DRAWER_SIDE',
  side,
  page
});

export const setDrawerAnimation = animation => ({
  type: 'SET_DRAWER_ANIMATION',
  animation
});
