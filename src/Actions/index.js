let nextTodoId = 0
export const addPage = (text) => ({
  type: 'ADD_PAGE',
  name: `page${nextTodoId++}`
})

export const setActivePage = (name) => ({
  type: 'SET_ACTIVE_PAGE',
  name
})
