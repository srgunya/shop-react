import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import './css/style.css'
import minData from './components/slider/js/minData';
import maxData from './components/slider/js/maxData';



let el  = document.createElement('div');
el.id = 'app';
document.body.appendChild(el);

let minText = ['Аксессуары', 'Cкидки', 'Мужские толстовки', 'Мужские рубашки', 'Мужские куртки'];
let maxText = ['Stone island', 'Evisu', 'M+rc noir', 'Champion', 'Medicom toy'];



ReactDOM.render(<App minData={minData} maxData={maxData} minText={minText} maxText={maxText} />, el);
