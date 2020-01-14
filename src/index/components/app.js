import React, { Component } from "react";
import Header from './header/header';
import LongSlider from './slider/long slider/long_slider';
import ShortSlider from './slider/short slider/short_slider';
import Footer from './footer/footer';
import List from './list/list';

export default class App extends React.Component{
	constructor(props){
		super(props);
			this.state = {
			class : "shadow_hide",
		}
		this.hover = this.hover.bind(this);
		this.hide = this.hide.bind(this);
	}
	
	hover(){
		this.setState({class : "shadow"});
	}
	
	hide(){
		this.setState({class : "shadow_hide"});
	}
	
	
	render(){
				return <div>
		<Header hover={this.hover} hide={this.hide}/>
		<div className={this.state.class}></div>
		<div className="one_row">
			<LongSlider data={this.props.minData} className="carousel min" title="Актуальные категории" text={this.props.minText}/>
			<LongSlider data={this.props.maxData} className="carousel max" title="Новые поступления" text={this.props.maxText}/>
		</div>
		<div className="two_row">
			<ShortSlider data={this.props.shortData} />
		</div>
		<div className="three_row">
			<LongSlider data={this.props.newsData} className="carousel news" title="Новости" text={this.props.newsText}/>
				<List krsvData={this.props.krsvData}/>
			<LongSlider data={this.props.brandData} className="carousel brand" title="Бренды" text=""/>
		</div>
		<Footer />
		</div>
	}
}