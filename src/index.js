import React from 'react';
import ReactDOM from 'react-dom';

import Hook from './components/funcionais/Hook';

// import Contador from './components/classes/Contador';
// import Pai from './components/funcionais/Pai';
// import ComponenteClasse from './components/classes/ComponenteClasse';
// import ComponenteComFuncao from './components/ComponenteComFuncao';
// import Familia from './components/Familia';
// import Membro from './components/Membro';
// import FamiliaSilva from './components/FamiliaSilva';
// import PrimeiroComponente from './components/PrimeiroComponente';
// import { CompA, CompB as B} from './components/DoisComponentes';
// import MultiElementos from './components/Multielementos';

const elemento = document.getElementById('root');

ReactDOM.render(
  <div>

    <Hook numeroInicial={0} />

    {/* <Contador numeroInicial={10} /> */}
    {/* <ComponenteClasse valor="Sou um componente de classe"/> */}
    {/* <Pai /> */}
    {/* <ComponenteComFuncao /> */}
    {/* <Familia sobrenome="Pereira">
      <Membro nome="André" />
      <Membro nome="Mariana" />
    </Familia> */}
    {/* <FamiliaSilva /> */}
    {/* <MultiElementos />

    <PrimeiroComponente valor="Bem vindo"/>
    <CompA valor="Como vai, B?" />
    <B valor="Vou bem, A. E você?" />
    <CompA valor="Tudo ótimo :D" /> */}
  </div>, 
elemento);
