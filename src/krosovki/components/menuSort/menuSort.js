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
		<li><input type="checkbox" onClick={this.props.sort}/>Женский</li>
		<li><input type="checkbox" onClick={this.props.sort}/>Мужской</li>
		<li><input type="checkbox" onClick={this.props.sort}/>Унисекс</li>
		</ul>
		<ul>
		Цвет
		<li><input type="checkbox" onClick={this.props.sort}/>Чёрный</li>
		<li><input type="checkbox" onClick={this.props.sort}/>Белый</li>
		<li><input type="checkbox" onClick={this.props.sort}/>Синий</li>
		</ul>
		<ul>
		Бренд
		<li><input type="checkbox" onClick={this.props.sort}/>Nike</li>
		<li><input type="checkbox" onClick={this.props.sort}/>Adidas</li>
		<li><input type="checkbox" onClick={this.props.sort}/>Yezzy</li>
		</ul>
		</aside>
	}
}