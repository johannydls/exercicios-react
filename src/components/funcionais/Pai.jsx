import React from 'react';
import Filho from './Filho';

export default props => {
  // let lugarInformado = 'Nenhum'
  
  // const notificarSaidaDoFilho = lugar => {
  //   console.log(lugarInformado);
  //   lugarInformado = lugar;
  //   console.log(lugar);
  // }
  const notificarSaidaDoFilho = lugar => alert(`Liberado para ${lugar}`);
  return (
    <div>
      {/* {lugarInformado} */}
      <Filho notificarSaida={notificarSaidaDoFilho} />
    </div>
  )

}