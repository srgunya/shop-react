import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import './css/style.css'



let el  = document.createElement('div');
el.id = 'app';
document.body.appendChild(el);



ReactDOM.render(<App />, el);
