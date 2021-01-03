import React from "react";
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


const App = props => {


   return (
      <div className='container'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-8 mt-4'>
          <h3 className='text-capitalize text-center'> todo input</h3>
            <TodoInput />
            <TodoList />
        </div>
      </div>
    </div>
   );
}



export default App;