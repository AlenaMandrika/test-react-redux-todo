import { connect } from 'react-redux'
import { addTodo, toggleTodo, removeTodo, showAll, showActive, showCompleted, editTodo} from '../../actions'
import TodoList from './TodoList'

const mapStateToProps = (state) => {
  return {
    items: state.items,
    filter: state.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => {
      dispatch(addTodo(text))
    },
    editTodo: (text, id) => {
      dispatch(editTodo(text, id))
    },
    removeTodo: (id) => {
      dispatch(removeTodo(id))
    },
    toggleTodo: (id) => {
      dispatch(toggleTodo(id))
    },
    showAll: () => {
      dispatch(showAll())
    },
    showActive: () => {
      dispatch(showActive())
    },
    showCompleted: () => {
      dispatch(showCompleted())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(TodoList)
