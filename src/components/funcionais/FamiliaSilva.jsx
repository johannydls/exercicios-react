import React from 'react';
import Membro from './Membro';

const familiaSilva = {
  membros: ['Rafael', 'Daniela', 'Pedro', 'Ana'], 
  familia: 'Silva'
};

export default props => {
  return (
    <div>
      {/* {familiaSilva.membros.map((membro, index) => 
        <Membro key={index} nome={membro} sobrenome={familiaSilva.familia} />
      )} */}
      <Membro nome='Rafael' sobrenome='Silva' />
      <Membro nome='Daniela' sobrenome='Silva' />
      <Membro nome='Pedro' sobrenome='Silva' />
      <Membro nome='Ana' sobrenome='Silva' />
    </div>
  )
}
