import React, { Component } from "react";

export default class Sort extends Component{
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
	return <aside className="sort">
		<h1>Кроссовки</h1>
		<div className="sort_button">
			<div className="sort_button_left">
			<span>Показать</span>
			<button className={this.state.leftOne} onClick={()=>this.setState({leftOne : "fcs", leftTwo : "", leftThree : "",})}>60</button>
			<button className={this.state.leftTwo} onClick={()=>this.setState({leftOne : "", leftTwo : "fcs", leftThree : "",})}>120</button>
			<button className={this.state.leftThree} onClick={()=>this.setState({leftOne : "", leftTwo : "", leftThree : "fcs",})}>240</button>
			</div>
			<div className="sort_button_right">
			<span>Сортировать</span>
			<button className={this.state.rightOne} onClick={()=>this.setState({rightOne : "fcs", rightTwo : "", rightThree : "",})}>по умолчанию</button>
			<button className={this.state.rightTwo} onClick={()=>this.setState({rightOne : "", rightTwo : "fcs", rightThree : "",})}>возврастанию цен</button>
			<button className={this.state.rightThree} onClick={()=>this.setState({rightOne : "", rightTwo : "", rightThree : "fcs",})}>убыванию цен</button>
			</div>
		</div>
		
		</aside>
	}
}