import React, { Component } from "react";

export default class MenuSort extends Component{
	constructor(props){
		super(props);
		this.state = {
			leftOne : "fcs",
			leftTwo : "",
			leftThree : "",
			rightOne : "fcs",
			rightTwo : "",
			rightThree : "",
		}
	}
	
	render(){
	return <aside className="menuSort">
		<ul>
		Пол
		<li><input type="checkbox"/>Женский</li>
		<li><input type="checkbox"/>Мужской</li>
		<li><input type="checkbox"/>Унисекс</li>
		</ul>
		<ul>
		Цвет
		<li><input type="checkbox"/>Чёрный</li>
		<li><input type="checkbox"/>Белый</li>
		<li><input type="checkbox"/>Синий</li>
		</ul>
		<ul>
		Бренд
		<li><input type="checkbox"/>Nike</li>
		<li><input type="checkbox"/>Adidas</li>
		<li><input type="checkbox"/>Yezzy</li>
		</ul>
		<ul>
		Размер
		<li><input type="checkbox"/>1</li>
		<li><input type="checkbox"/>2</li>
		<li><input type="checkbox"/>3</li>
		</ul>
		</aside>
	}
}