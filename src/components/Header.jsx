import React from 'react';

import '../styles/Header.css';

export function Header(prop) {

  return (
    <header>
        <h1>{prop.titulo}</h1>
    </header>
  );
}