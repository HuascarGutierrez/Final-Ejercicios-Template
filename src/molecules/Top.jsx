import React from 'react'
import Title from '../atoms/Title'
import Contador from '../atoms/Contador'

import './styles/Top.css'
function Top() {
  return (
    <div className='top'>
      <Title/>
      <Contador/>
    </div>
  )
}

export default Top
