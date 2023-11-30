import React from 'react'
import Imagen from '../atoms/Imagen'
import Description from '../molecules/Description'
import Flecha from '../atoms/Flecha'

import './styles/Ejercicio.css'
function Ejercicio(props) {
    const ejercicio = props.ejercicio
  return (
    <div className='ejercicio'>
      <Imagen imgUrl={ejercicio.imgUrl}/>
      <Description name={ejercicio.name} series={ejercicio.series}/>
      <Flecha/>
    </div>
  )
}

export default Ejercicio
