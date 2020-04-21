import React, { Component } from 'react';

export default class Contador extends Component {

  state = {
    numero: this.props.numeroInicial
  }

  maisUm = (event) => {
    this.alterarNumero(1);
    console.log(event.target);
    // this.setState({ numero: this.state.numero + 1});
    // this.state.numero = this.state.numero + 1
    // console.log(this);
  }
  
  menosUm = () => {
    this.alterarNumero(-1);
    // this.setState({ numero: this.state.numero - 1});
    // this.state.numero = this.state.numero - 1;
  }

  alterarNumero = (difference) => {
    this.setState({
      numero: this.state.numero + difference
    })
  }

  render() {
    return (
      <div>
        <h1>Contador</h1>
        <hr/>
        <div>Número: {this.state.numero}</div>
        <br/>
        <button onClick={this.maisUm}>Incrementar</button>
        <button onClick={this.menosUm}>Decrementar</button>
        {/* Quando precisar passar algum parâmetro na função, */}
        {/* é preciso transformar a chamada em uma arrow function */}
        <button onClick={() => this.alterarNumero(10)}>Incrementar 10</button>
        <button onClick={() => this.alterarNumero(-10)}>Decrementar 10</button>
      </div>
    );
  }
}
// Solução 1 - Bind
// constructor(props) {
//   super(props);
//   this.maisUm = this.maisUm.bind(this);
// }

// Solução 2 - Função arrow (Onclick)
// <button onClick={() => this.maisUm()}>Incrementar</button>

// Solução 3 - Função arrow
// maisUm = () => {
//   // this.props.numero++;
//   console.log(this);
// }