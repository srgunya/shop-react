import React, { Component } from "react";
import Header from './header/header';
import Slider from './slider/slider';

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {}
	}
	
	render(){
	return <div>
		<Header />
		<div className="one_row">
		<Slider data={this.props.minData} className="carousel min" title="Актуальные категории" text={this.props.minText}/>
		<Slider data={this.props.maxData} className="carousel max" title="Новые поступления" text={this.props.maxText}/>
		</div>
		</div>
	}
}