import React, { useState, useEffect } from 'react';

export default props => {
  
  const [contador, setContador] = useState(props.numeroInicial);
  const [status, setStatus] = useState(props.numeroInicial % 2 === 0 ? 'Par' : 'Ímpar');

  useEffect(() => {
    contador % 2 === 0 ? setStatus('Par') : setStatus('Ímpar');
    document.title = `App (${contador} cliques)`
  });

  const maisUm = () => {
    setContador(contador + 1);
  }

  const menosUm = () => {
    setContador(contador - 1);
  }

  return (
    <div>
      <h1>Contador</h1>
      <hr/>
      <div>Número: {contador}</div>
      <div>O número é: {status}</div>
      <br/>
      <button onClick={() => maisUm()}>Incrementar</button>
      <button onClick={menosUm}>Decrementar</button>
    </div>
  )
}