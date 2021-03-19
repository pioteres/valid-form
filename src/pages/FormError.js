import React from 'react';

function FormError({ error }) {
  return (
    <span>
      {error ? <span className="error">Pole wymagane</span> : <span /> }
    </span>
  );
}

export default FormError;