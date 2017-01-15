const Page = (state, action) => {
  switch (action.type) {
    case 'ADD_PAGE':
      return {
        key: action.key,
        layout: null,
        components: [],
        style: {}
      }
    default:
      return state
  }
}

const Pages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PAGE':
      return [
        ...state,
        Page(undefined, action)
      ]
    default:
      return state
  }
}

export default Pages