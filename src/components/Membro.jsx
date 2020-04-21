import React from 'react'

export default props => {
  return (
    <div>
      {props.nome}
      <strong> {props.sobrenome}</strong>
      <strong> {props.numero}</strong>
    </div>
  )
}
