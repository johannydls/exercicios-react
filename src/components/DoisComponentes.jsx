import React from 'react';

const CompA = props => {
  return (
    <h1>Primeiro diz: {props.valor}</h1>
  );
}

const CompB = props => {
  return (
    <h1>Segundo diz: {props.valor}</h1>
  );
}

export { CompA, CompB };