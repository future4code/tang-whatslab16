import React from 'react';
import styled from 'styled-components';


const DivPai = styled.div`
  display: flex;
  justify-content: center;
`
const DivPrincipal = styled.div`
  background-color: lightgrey;
  display: flex;
  flex-direction: column-column-reverse;
  align-items: flex-end;
  width: 40%;
  height: 90vh;
  border-radius: 5px;
  `
const DivMensagens = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`
const InputUsuario = styled.input`
  width: 20%;
  border-radius: 5px;
  border-color: lightblue;
  height: 4vh;
  padding: 2px;
`
const InputMensagem = styled.input`
  width: 60%;
  border-radius: 5px;
  border-color: lightblue;
  height: 4vh;
  padding: 2px;
`
const BotaoEnviar = styled.button`
  width: 20%;
  background-color: lightblue;
  border-radius: 5px;
  height: 5vh;
`


class App extends React.Component {
  state = {
    mensagens: [],
    inputDoUsuario: "",
    inputDaMensagem: ""
  }

  adicionarNovaMensagem = () => {
    
    const NovaMensagem = {
      usuario: this.state.inputDoUsuario,
      mensagem: this.state.inputDaMensagem
    } 

    const novaListaDeMensagens = [NovaMensagem,...this.state.mensagens]

    this.setState({ mensagens: novaListaDeMensagens})
  }

onChangeInputUsuario = (event) => {
  this.setState({ inputDoUsuario: event.target.value })
}

onChangeInputMensagem = (event) => {
  this.setState({ inputDaMensagem: event.target.value })
}

  render() {
    const listaDeMensagens = this.state.mensagens.map((msg) => {
      return (
          <p>{msg.usuario}:{msg.mensagem}</p>
      )
  });

  return (
      <DivPai>
          <DivPrincipal>
            <div>
              {listaDeMensagens}
            </div>
            <InputUsuario placeholder="Usuário" value={this.state.inputDoUsuario} onChange={this.onChangeInputUsuario} />
            <InputMensagem placeholder="Mensagem" value={this.state.inputDaMensagem} onChange={this.onChangeInputMensagem} />
            <BotaoEnviar onClick={this.adicionarNovaMensagem}>Enviar</BotaoEnviar>
            
          </DivPrincipal>    
      </DivPai>
  )};
}

export default App;