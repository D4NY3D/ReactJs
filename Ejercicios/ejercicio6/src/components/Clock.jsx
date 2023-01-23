import React, { useState, useEffect } from 'react';

const Clock = () => {
  const datos = {
    fecha: new Date(),
    edad: 0,
    nombre: 'Martín',
    apellidos: 'San José',
  };

  const [state, setState] = useState(datos);

  useEffect(() => {
    const datosAge = setInterval(() => {
      datosActualizado();
    }, 1000);
    return () => {
      clearInterval(datosAge);
    };
  });

  const datosActualizado = () => {
    return setState({
      fecha: state.fecha,
      edad: state.edad + 1,
      nombre: state.nombre,
      apellidos: state.apellidos,
    });
  };
  return (
    <div>
      <h2>
        Hora Actual:
        {state.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {state.nombre} {state.apellidos}
      </h3>
      <h1>Edad: {state.edad}</h1>
    </div>
  );
};

export default Clock;