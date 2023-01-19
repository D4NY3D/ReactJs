//rfcp

import React, { useState } from 'react';
import PropTypes from 'prop-types';



function ComponenteB(props) {
  const [conectado, setConectado] = useState(props);
  return (
    <div>
      <h3> {conectado === false ? 'Contacto no disponible' : 'Contacto En linea'}</h3>
      <button onClick={() => setConectado(!conectado)}>{conectado === false ? 'Conectar' : 'Desconectar'}</button>
    </div>
  );
}

ComponenteB.propTypes = {
  props: PropTypes.bool,
};

export default ComponenteB;

