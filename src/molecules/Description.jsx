import React from 'react'
import NameEx from '../atoms/NameEx'
import Serie from '../atoms/Serie'

function Description(props) {
  return (
    <div>
      <NameEx name={props.name}/>
      <Serie series={props.series}/>
    </div>
  )
}

export default Description
