import React, { Component } from "react";

export default class List extends Component{
	constructor(props){
		super(props);
		this.state={
		}
	}
	
	render(){
	return <div className="list">
		<div className="textBlock">SNEAKERS</div>
		<div className="list_top">
			<img src={this.props.krsvData[this.props.krsvData.length - 1].src} />
			<h1>{this.props.krsvData[this.props.krsvData.length - 1].brand} Spezial</h1>
		</div>
		<div className="list_mid">
			<img src={this.props.krsvData[this.props.krsvData.length - 2].src} />
			<h1>{this.props.krsvData[this.props.krsvData.length - 2].brand} Air 1</h1>
		</div>
		<div>
			<img src={this.props.krsvData[this.props.krsvData.length - 3].src} />
			<h1>{this.props.krsvData[this.props.krsvData.length - 3].brand} AirMax 90</h1>
		</div>
		</div>
	}
}