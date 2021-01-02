import React from 'react';
import TodoItem from './TodoItem'
import {connect} from 'react-redux'


function TodoList(props) {
  console.log(props)
  return (
    <div className='card card-body'>
  <ul className='list-group'>
  <h3 className='text-capitalize text-center' >todo list</h3>
  {props.newItem.map(todo=>{
    const {id,title} = todo.todo
    return  <TodoItem key={id} title={title} id={id}/>
  })}
   
     </ul>
  </div>
  )
}

function mapStateToProps(state) {
  return { newItem: state}
}

export default connect(mapStateToProps)(TodoList);