import React from 'react';

export default function TodoItem(props) {
  return (
    <li className='list-group-item d-flex text-capitalize justify-content-between my-2'>
      <h6>{props.title}</h6>
      <div>
        <span className='text-success mx-2'><i className='fas fa-pen'/></span>
        <span className='text-danger mx-2'><i className='fas fa-trash'/></span>
      </div>
    </li>
  )
}