const todo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        },
      ]
    }

    case 'EDIT_TODO': {
      return state.map((todo, id) => {
        if(id === action.id) {
          return {
            ...todo,
            text: todo.text,
            id: todo.id
          }
        } else {
          return todo
        }
      })
    }

    case 'REMOVE_TODO':
      return[
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1)
      ];

    case 'TOGGLE_TODO':
      return[
        ...state.slice(0, action.id),
        {
          text: state[action.id].text,
          completed: !state[action.id].completed
        },
        ...state.slice(action.id + 1)
      ];

    default: {
      return state
    }
  }
}

const filterReducer = (state = 'ALL', action) => {
  switch(action.type){
    case 'SHOW_ALL':
      return 'ALL';
    case 'SHOW_COMPLETED':
      return 'COMPLETED';
    case 'SHOW_ACTIVE':
      return 'ACTIVE';

    default:
      return state;
  }
}

export { todo, filterReducer }
