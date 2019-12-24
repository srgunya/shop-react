import React, { Component } from "react";
import Header from '../../index/components/header/header';
import Footer from '../../index/components/footer/footer';
import Sort from './sort/sort';
import MenuSort from './menuSort/menuSort';
import Item from './item/item';

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
		let item = this.props.data.map(item => <Item photo={item["src"]} brand={item["brand"]} />)
				return <div>
		<Header hover={this.hover} hide={this.hide}/>
		<div className={this.state.class}></div>
		<Sort />
			<div className="cont">
				<MenuSort />
				<div>
				{item}
				</div>
			</div>
		<Footer />
		</div>
	}
}