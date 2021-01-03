import React from 'react';
import TodoItem from './TodoItem'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as creators from './Redux/actions/creators'
import PropTypes from 'prop-types'

const TodoList = props => {


   function clear() {
      props.dispatch(creators.cleartodo())
   }

   function deleteTodo(e) {
      let id = e.target.id
      props.dispatch(creators.deletetodo(id))
   }

   function editTodo(e) {
      let id = e.target.id;
      if (props.isEdit) {
         return;
      } else {
         props.dispatch(creators.edittodo(id));
      }
   }

   return (
      <div className='card card-body'>
  <ul className='list-group'>
  <h3 className='text-capitalize text-center' >todo list</h3>
  {
    props.newTodo.map(item => {
    const {title,id} = item
   return <TodoItem editTodo={editTodo} deleteTodo={deleteTodo} key={id} title={title} id={id}/>
   })
  }   </ul>
    <button onClick={clear}  className='btn btn-block bg-danger my-3'>clear list</button>
  </div>
   )
}
TodoList.propTypes = {
   newTodo: PropTypes.array.isRequired,
   isEdit: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
   console.log(state);
   return {
      newTodo: state.todos,
      isEdit: state.isEdit
   }
}

export default connect(mapStateToProps)(TodoList);