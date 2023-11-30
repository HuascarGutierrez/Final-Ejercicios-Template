import React from 'react'

import "./styles/NameEx.css"
function NameEx(props) {
  return (
    <div>
      <p className='nombre'>{props.name}</p>
    </div>
  )
}

export default NameEx
