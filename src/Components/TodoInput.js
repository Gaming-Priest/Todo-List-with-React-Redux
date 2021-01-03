import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux'
import * as creators from './Redux/actions/creators'
import { bindActionCreators } from 'redux'
import { v4 as uuid } from 'uuid'

function TodoInput(props) {
  const [state, setState] = useState({
    input: '',
    id: uuid()
  })

  function handleChange(e) {
    e.preventDefault();
    let value = e.target.value
    setState({
      input: value,
      id: uuid()
    })
  }

  function submit(e) {
    e.preventDefault()
    if (!state.input) {
      return;
    } else {
      props.actions.addtodo({ title: state.input, id: state.id })
      setState({
        input: '',
        id: uuid()
      })
    }
  }
useEffect(()=>{
    if (!props.text.isEdit) {
      return;
    }else{
      setState({
        input:props.text.edit,
        id:uuid()
      })
      props.settext({
        edit:'',
        isEdit:false
      })
    }
})


  return (
    <div className='card card-body my-3'>
     <form>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <div className='input-group-text  text-white bg-primary'>
            <i className='fas fa-book'/>
            </div>
          </div>
            <input className='form-control text-capitalize' onChange={handleChange} value={state.input} placeholder='create todo item'/>
        </div>
        <button type='submit' onClick={submit} className='btn form-control btn-primary my-3'>add item</button>
      </form>
  </div>
  )
}

function mapStateToProps(state) {
  return  {id:state}
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(creators, dispatch) };
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);