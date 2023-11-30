import React from 'react'


import "./styles/Serie.css" 
function Serie(props) {
  return (
    <div>
      <p className='serie'>{props.series}</p>
    </div>
  )
}

export default Serie
