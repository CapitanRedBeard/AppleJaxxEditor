let nextTodoId = 0
export const addPage = (text) => ({
  type: 'ADD_PAGE',
  name: `page${nextTodoId++}`
})
