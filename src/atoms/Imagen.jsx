import React from 'react'

import "./styles/Imagen.css"
function Imagen(props) {
  return (
    <div>
      <img src={props.imgUrl} className='imagen'></img>
    </div>
  )
}

export default Imagen
