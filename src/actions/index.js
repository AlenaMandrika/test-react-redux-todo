export const addTodo = text => ({
  type: 'ADD_TODO',
  id: Date.now(),
  text
})

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const editTodo = (text, id) => {
  return {
    type: 'EDIT_TODO',
    id,
    text
  }
}

export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
}

export const showAll = () => {
  return {
    type: 'SHOW_ALL'
  }
}

export const showActive = () => {
  return {
    type: 'SHOW_ACTIVE'
  }
}

export const showCompleted = () => {
  return {
    type: 'SHOW_COMPLETED'
  }
}





