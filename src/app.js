import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'; //cria Link e NavLink

import 'normalize.css/normalize.css';
import './styles/styles.scss';


const jsx = (
    <div>
      <AppRouter />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
