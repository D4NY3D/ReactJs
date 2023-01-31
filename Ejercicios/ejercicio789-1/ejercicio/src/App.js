import React, { useState, useEffect } from 'react';

import './App.css';
import ContactComponent from './componentes/contactComponent';
import ContactForm from './componentes/contactForm';
const App = () => {
  const listaContacto = [
    { nombre: 'Daniel', email: 'daniel40.gmail.com', edad: 40 },
    { nombre: 'Irene', email: 'irene40@gmail.com', edad: 40, conectado: false },
    { nombre: 'Mario', email: 'no tiene', edad: 5, conectado: false },
  ];

  const [nuevoContacto, setNuevoContacto] = useState(listaContacto);

  function cambioEstado(contacto) {
    const index = nuevoContacto.indexOf(contacto);
    const tempContact = [...nuevoContacto];
    tempContact[index].estado = !tempContact[index].estado;
    setNuevoContacto(tempContact);
  }

  function eliminar(contacto) {
    const index = nuevoContacto.indexOf(contacto);
    const tempContact = [...nuevoContacto];
    tempContact.splice(index, 1);
    setNuevoContacto(tempContact);
  }

  function añadirContacto(contacto) {
    const tempContact = [...nuevoContacto];
    tempContact.push(contacto);
    setNuevoContacto(tempContact);
  }

  return (
    <div className="App">
      <h1>Contactos</h1>

      <div className="card-container">
        {nuevoContacto.map((contacto, index) => {
          return (
            <ContactComponent key={index} contacto={contacto} cambioEstado={cambioEstado} eliminar={eliminar}></ContactComponent>
          );
        })}
      </div>
        <ContactForm onAddContact={añadirContacto}></ContactForm>
     
    </div>
  );
};

export default App;