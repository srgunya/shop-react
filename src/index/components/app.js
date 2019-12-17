import React, { Component } from "react";
import Header from './header/header';
import LongSlider from './slider/long slider/long_slider';
import ShortSlider from './slider/short slider/short_slider';

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {}
	}
	
	render(){
	return <div>
		<Header />
		<div className="one_row">
			<LongSlider data={this.props.minData} className="carousel min" title="Актуальные категории" text={this.props.minText}/>
			<LongSlider data={this.props.maxData} className="carousel max" title="Новые поступления" text={this.props.maxText}/>
		</div>
		<div className="two_row">
			<ShortSlider data={this.props.shortData} />
		</div>
		</div>
	}
}