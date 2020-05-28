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
		let tuta = this;
	return <div className="sort">
		<h1>Кроссовки</h1>
		<div className="sort_button">
			<div className="sort_button_left">
			<span>Показать</span>
		
			<button className={this.state.leftOne} onClick={function(){
				tuta.props.ListClass(9)
				tuta.setState({leftOne : "fcs", leftTwo : "", leftThree : "",});
			}}>9</button>

			<button className={this.state.leftTwo} onClick={function(){
				tuta.props.ListClass(18)
				tuta.setState({leftOne : "", leftTwo : "fcs", leftThree : "",})
			}}>18</button>

			<button className={this.state.leftThree} onClick={function(){
				tuta.props.ListClass(27)
				tuta.setState({leftOne : "", leftTwo : "", leftThree : "fcs",})
			}}>27</button>

			</div>
			<div className="sort_button_right">
			<span>Сортировать</span>
			<button className={this.state.rightOne} onClick={function(){
				tuta.props.sortPriceNormal();
				tuta.setState({rightOne : "fcs", rightTwo : "", rightThree : "",});
			}}>по умолчанию</button>
			<button className={this.state.rightTwo} onClick={function(){
				tuta.props.sortPriceBig();
				tuta.setState({rightOne : "", rightTwo : "fcs", rightThree : "",});
			}}>возрастанию цен</button>
			<button className={this.state.rightThree} onClick={function(){
				tuta.props.sortPriceSmall();
				tuta.setState({rightOne : "", rightTwo : "", rightThree : "fcs",})
			}}>убыванию цен</button>
			</div>
		</div>
		
		</div>
	}
}