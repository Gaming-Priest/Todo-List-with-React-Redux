import React, { useState } from "react";
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import TodoList from './Components/TodoList';
import TodoInput from './Components/TodoInput';
import * as creators from './Components/Redux/actions/creators'

function App(props) {
  const [ text, setText ] = useState({
    edit:'',
    isEdit:false
  })

  function editTodo(e) {
   let id = e.target.id;
    let title = e.target.title;
   props.actions.edittodo(id);
    
    setText({
      edit:title,
      isEdit:true
    });
  }


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-8 mt-4'>
          <h3 className='text-capitalize text-center'> todo input</h3>
            <TodoInput text={text} settext={setText}/>
            <TodoList editTodo={editTodo} />
        </div>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(creators,dispatch)}
}

export default connect(null, mapDispatchToProps)(App)