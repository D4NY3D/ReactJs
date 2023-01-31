import React from 'react';

const ContactComponent = ({ contacto, cambioEstado, eliminar }) => {
  return (
    <div>
      <h2>Nombre: {contacto.nombre}</h2>
      <h2>Email: {contacto.email}</h2>
      <h3>Edad: {contacto.edad}</h3>
      <span>Estado {contacto.conectado}</span>


      <button
        style={{ backgroundColor: contacto.estado ? 'blue' : 'red' }}
        onClick={() => {
          cambioEstado(contacto);
        }}
      >
        {contacto.estado ? 'Conectado' : 'Desconectado'}
      </button>

      <button className="remove-button" onClick={() => eliminar(contacto)}>
        Borrar
      </button>
    </div>
  );
};

export default ContactComponent;