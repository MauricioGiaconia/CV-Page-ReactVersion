import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

export function Navigation(prop) {

  return (
    <nav>
        <ul>
            <li><Link to=''>Curriculum</Link></li>
            <li><Link to='/contact'>Contacto</Link></li>     
        </ul>
    </nav>
  );
}