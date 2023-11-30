import React from 'react'
import Title from '../atoms/Title'
import Top from '../molecules/Top'
import Ejercicio from '../organisms/Ejercicio'
import { ejercicios } from '../assets/ExercisesAPI'

function ListaEjercicios() {
  return (
    <div>
      <Top/>
      {
        ejercicios.map(
            ejercicio=>{
                return(
                    <Ejercicio ejercicio={ejercicio} />
                )
            }
        )
      }
    </div>
  )
}

export default ListaEjercicios
