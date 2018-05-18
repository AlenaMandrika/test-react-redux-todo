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
