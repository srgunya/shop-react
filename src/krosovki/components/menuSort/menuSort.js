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
		<li><input type="checkbox" className="checkbox" id="cb1" onClick={this.props.sort}/><label htmlFor="cb1">Женский</label></li>
		<li><input type="checkbox" className="checkbox" id="cb2" onClick={this.props.sort}/><label htmlFor="cb2">Мужской</label></li>
		<li><input type="checkbox" className="checkbox" id="cb3" onClick={this.props.sort}/><label htmlFor="cb3">Унисекс</label></li>
		</ul>
		<ul>
		Цвет
		<li><input type="checkbox" className="checkbox" id="cb4" onClick={this.props.sort}/><label htmlFor="cb4">Чёрный</label></li>
		<li><input type="checkbox" className="checkbox" id="cb5" onClick={this.props.sort}/><label htmlFor="cb5">Белый</label></li>
		<li><input type="checkbox" className="checkbox" id="cb6" onClick={this.props.sort}/><label htmlFor="cb6">Синий</label></li>
		</ul>
		<ul>
		Бренд
		<li><input type="checkbox" className="checkbox" id="cb7" onClick={this.props.sort}/><label htmlFor="cb7">Nike</label></li>
		<li><input type="checkbox" className="checkbox" id="cb8" onClick={this.props.sort}/><label htmlFor="cb8">Adidas</label></li>
		<li><input type="checkbox" className="checkbox" id="cb9" onClick={this.props.sort}/><label htmlFor="cb9">Yezzy</label></li>
		</ul>
		</aside>
	}
}