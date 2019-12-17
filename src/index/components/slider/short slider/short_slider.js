import React, { Component } from "react";


export default class ShortSlider extends Component{
	constructor(props){
		super(props);
		this.state = {
			indexNext : 0,
			one : 'one',
			two : 'two',
		}
		this.next = this.next.bind(this)
		this.prev = this.prev.bind(this)
	}
	
	next(){
		event.preventDefault();
			if(this.state.indexNext == 0){
				this.setState({indexNext : 1, one : 'one_next', two : 'two_next'})
			} else if(this.state.indexNext == 1){
				this.setState({indexNext : 0, one : 'two_next', two : 'one_next'})
			} 
	}
	
	prev(){
		event.preventDefault();
			if(this.state.indexNext == 0){
				this.setState({indexNext : 1, one : 'one_prev', two : 'two_prev'})
			} else if(this.state.indexNext == 1){
				this.setState({indexNext : 0, one : 'two_prev', two : 'one_prev'})
			} 
	}
	
	
	
	
	render(){	
	return <div className="carousel short">
				<ul>
					<li className={this.state.one}>
						<img src={this.props.data[0].src} alt=""/>
						<div className="textSlide stone">Новая коллекция Stone Island <br/> уже на сайте</div>
					</li>
					<li className={this.state.two}>
						<img src={this.props.data[1].src} alt=""/>
						<div className="textSlide">Вещи от Polo Ralph Lauren <br/> отличный подарок на новый год </div>
					</li>
				</ul>
					<a href="#" className="next" onClick={this.next}><img src="../src/index/components/slider/long slider/img/next.svg" alt=""/></a>
					<a href="#" className="prev" onClick={this.prev}><img src="../src/index/components/slider/long slider/img/next.svg" alt=""/></a>
			</div>
	}
}