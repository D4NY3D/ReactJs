import React, { useRef } from 'react';

const ContactForm = ({ onAddContact }) => {
  const name = useRef('');
  const email = useRef('');
  const age = useRef('');

  function añadirContacto(e) {
    e.preventDefault();

    const newContact = { nombre: name.current.value, email: email.current.value, edad: age.current.value, conectado: true };

    onAddContact(newContact);
    name.current.value = '';
    email.current.value = '';
    age.current.value ='';
  }

  return (
    <form onSubmit={añadirContacto} className="contact-component">
      <h2>Añadir Contacto: </h2>
      <input ref={name} name="name" placeholder="Nombre contacto" className="form-control mb-2" />
      <input ref={email} name="email" type="email" placeholder="Email contacto" />
      <input ref={age} name="age" type="edad" placeholder='Edad contacto'/>
      <button onClick={añadirContacto} type="submit" className="submit-button">
        Añadir Contacto
      </button>
    </form>
  );
};

export default ContactForm;