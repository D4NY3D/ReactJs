import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/componenteA';
//import { Contacto } from './models/contacto.class';

function App() {
  const contacto1 = {
    nombre: 'Daniel',
    apellido: 'Espinosa',
    email: 'danyjerez@gmail',
    conectado: false,
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteA contacto={contacto1}/>
      </header>
    </div>
  );
}

export default App;
