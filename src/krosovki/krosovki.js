import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import './css/style.css';
import krsvData from './components/item/js/krsvData';


let el  = document.createElement('div');
el.id = 'app';
document.body.appendChild(el);

ReactDOM.render(<App data={krsvData}/>, el);
