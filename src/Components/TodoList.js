import React from 'react';
import TodoItem from './TodoItem'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as creators from './Redux/actions/creators'

function TodoList(props) {
  console.log(props);

  function clear() {
    props.dispatch(creators.cleartodo())
  }

  function deleteTodo(e) {
    let id = e.target.id
    props.dispatch(creators.deletetodo(id))
  }

  

  return (
    <div className='card card-body'>
  <ul className='list-group'>
  <h3 className='text-capitalize text-center' >todo list</h3>
  {
  props.newItem.map(item=>{
    const {title,id} = item
  return <TodoItem editTodo={props.editTodo} deleteTodo={deleteTodo} key={id} title={title} id={id}/>
  })
  }   </ul>
    <button onClick={clear}  className='btn btn-block bg-danger my-3'>clear list</button>
  </div>
  )
}

function mapStateToProps(state) {
  console.log(state);
  
  return {newItem:state}
}

export default connect(mapStateToProps)(TodoList);