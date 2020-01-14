import React, { Component } from "react";

export default class Item extends Component{
	constructor(props){
		super(props);
		this.state = {};
	}
	
	
	render(){
	return <div className="item">
		<img src={this.props.photo} />
		<h1>{this.props.brand}</h1>
		<p>Цена: {this.props.price}<br/>
			Пол: {this.props.sex} <br/>
		</p>
		</div>
	}
}