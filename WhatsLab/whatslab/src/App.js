import React from 'react';
import styled from 'styled-components';


const DivPai = styled.div`
  display: flex;
  justify-content: center;
`
const DivPrincipal = styled.div`
  background-color: lightgrey;
  display: flex;
  flex-direction: column-reverse;
  width: 40%;
  height: 90vh;
  border-radius: 5px;
  `
const DivInputs = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`
const DivMensagens = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column-reverse;
  padding-left: 10px;
  padding-right: 8px;
`
const DivUser = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  font-weight: bold;
`
const DivMsg = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
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
        <div>
          <DivUser>{msg.usuario}:</DivUser>
          <DivMsg>{msg.mensagem}</DivMsg>
        </div>
      )
  });

  return (
      <DivPai>
          <DivPrincipal>
            <DivInputs>
              <InputUsuario placeholder="Usuário" value={this.state.inputDoUsuario} onChange={this.onChangeInputUsuario} />
              <InputMensagem placeholder="Mensagem" value={this.state.inputDaMensagem} onChange={this.onChangeInputMensagem} />
              <BotaoEnviar onClick={this.adicionarNovaMensagem}>Enviar</BotaoEnviar>
            </DivInputs>
            <DivMensagens>
              {listaDeMensagens}
            </DivMensagens>
          </DivPrincipal>    
      </DivPai>
  )};
}

export default App;