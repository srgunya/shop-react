import React, { Component } from "react";

export default class Item extends Component{
	constructor(props){
		super(props);
		this.state = {
		};
	this.handleAddBasket = this.handleAddBasket.bind(this);
	}
	
	handleAddBasket(e){
    e.preventDefault(); 
    const addBasket = this.props.handleAddBasket;
    addBasket(this.props.id);
  }


	
	render(){
	return <div className="item">
		<img src={this.props.photo} />
		<h1>{this.props.brand}</h1>
		<p>Цена: {this.props.price}<br/>
			Пол: {this.props.sex} <br/>
				<button onClick={this.handleAddBasket}>добавить</button>
		</p>
		</div>
	}
}