import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import './css/style.css'
import minData from './components/slider/long slider/js/minData';
import maxData from './components/slider/long slider/js/maxData';
import shortData from './components/slider/short slider/js/shortData';
import newsData from './components/slider/long slider/js/newsData';
import brandData from './components/slider/long slider/js/brandData';

let el  = document.createElement('div');
el.id = 'app';
document.body.appendChild(el);

let minText = ['Аксессуары', '', 'Мужские толстовки', 'Мужские рубашки', 'Мужские куртки'];
let maxText = ['Stone island', 'Evisu', 'M+rc noir', 'Champion', 'Medicom toy'];
let newsText = ['Travis scott & adidas 3m', 'neighborhood & adidas run city: бег сквозь город', 'adidas yeezy boost 700 carbon blue', 'adidas & 424: Максимальный минимализм', ''];



ReactDOM.render(<App 
				minData={minData}
				maxData={maxData}
				shortData={shortData}
				newsData={newsData}
				minText={minText}
				maxText={maxText} 
				newsText={newsText} 
				brandData={brandData}
				/>, el);
