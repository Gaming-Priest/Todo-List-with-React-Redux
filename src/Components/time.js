import React, { useState, useEffect } from 'react';

export default function Time() {
  const [state, setState] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0
  })

  function time() {
    setState({
      seconds: new Date().getUTCSeconds(),
      minutes: new Date().getUTCMinutes(),
      hours: new Date().getUTCHours()
    })
  }
  new Date().get
  setInterval(() => {time()}, 1000)
  return (
    <React.Fragment>
    <p className='sec'>{state.seconds}</p>
    <p className='time'>{state.hours}:{state.minutes}</p>
  </React.Fragment>
  )
}