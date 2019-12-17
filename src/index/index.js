import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import './css/style.css'
import minData from './components/slider/long slider/js/minData';
import maxData from './components/slider/long slider/js/maxData';
import shortData from './components/slider/short slider/js/shortData';



let el  = document.createElement('div');
el.id = 'app';
document.body.appendChild(el);

let minText = ['Аксессуары', 'Cкидки', 'Мужские толстовки', 'Мужские рубашки', 'Мужские куртки'];
let maxText = ['Stone island', 'Evisu', 'M+rc noir', 'Champion', 'Medicom toy'];



ReactDOM.render(<App minData={minData} maxData={maxData} shortData={shortData} minText={minText} maxText={maxText} />, el);
