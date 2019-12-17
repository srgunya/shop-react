import React, { Component } from "react";
import Header from './header/header';
import LongSlider from './slider/long slider/long_slider';
import ShortSlider from './slider/short slider/short_slider';
import Footer from './footer/footer';

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
		<div className="three_row">
			<LongSlider data={this.props.newsData} className="carousel news" title="Новости" text={this.props.newsText}/>
				<div>123</div>
			<LongSlider data={this.props.brandData} className="carousel brand" title="Бренды" text=""/>
		</div>
		<Footer />
		</div>
	}
}