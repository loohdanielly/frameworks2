import './App.css';
import {Component} from 'react';
import { Busca } from './components/Busca';
import { Lista } from './components/Lista';
import { Cabecalho } from './components/Cabecalho';
import { Rodape } from './components/Rodape';

class App extends Component{

  state = {
    busca: '',
    odas: []
  }

  componentDidMount(){
    this.carregaODAs();
  }

  carregaODAs(){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
  }

  buscaODA = (evento) => {
    this.setState({busca:evento.target.value});
    this.carregaODAs()
  }
  render(){
    const {odas} = this.state;
    return (
      <section className='container'>
      <Rodape/>
      <Cabecalho/>
      
      <Busca
      busca={this.state.busca}
      buscaODA={this.buscaODA}
      />
      
      {odas.map(oda => (
        <div key = {oda._id}>
        <Lista
          key= {oda._id}
          nome= {oda.nome}
          usuario = {oda.usuario}
          data_inclusao= {oda.data_inclusao}
          escricao= {oda.escricao}
          palavras_chaves= {oda.palavras_chaves}
        />
        </div>
      ))}
      </section>
    )
   }
  }
export default App;
