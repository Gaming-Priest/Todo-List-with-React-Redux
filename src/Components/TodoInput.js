import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as creators from './Redux/actions/creators';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid';

const TodoInput = props => {

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
            id: uuid(),
         })
      }
   }
   useEffect(() => {
      if (props.isEdit) {
         setState({
            input: props.edit.title,
            id: props.edit.id
         })
      }
   }, [props.isEdit])



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
        <button type='submit' onClick={submit} className={`btn form-control text-capitalize ${props.isEdit ? 'btn-success': 'btn-primary'} my-3`}>{props.isEdit ? 'Edit Todo' : 'Add Todo'}</button>
      </form>
  </div>
   )
}
TodoInput.propTypes = {
   edit: PropTypes.object.isRequired,
   isEdit: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
   return {
      edit: state.edit,
      isEdit: state.isEdit
   }
}

function mapDispatchToProps(dispatch) {
   return { actions: bindActionCreators(creators, dispatch) };
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);