import React from 'react';
import { createRoot } from 'react-dom';
import './Estilos/global.css';
import Main from './Main';



createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);