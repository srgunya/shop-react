import React, { Component } from "react";


export default class Slider extends Component{
	constructor(props){
		super(props);
		this.state = {
			indexNext : 0,
			indexPrev : 0,
			one : 'one',
			two : 'two',
			three : 'three',
			four : 'four',
			five : 'five',
		}
		this.next = this.next.bind(this)
		this.prev = this.prev.bind(this)
	}
	
	next(){
			if(this.state.indexNext == 0){
				this.setState({indexNext : 1, indexPrev : 4, one : 'one_next', two : 'two_next', three : 'two', four : 'three', five : 'four',})
			} else if(this.state.indexNext == 1){
				this.setState({indexNext : 2, indexPrev : 3, one : 'four', two : 'one_next', three : 'two_next', four : 'two', five : 'three',})
			} else if(this.state.indexNext == 2){
				this.setState({indexNext : 3, indexPrev : 2, one : 'three', two : 'four', three : 'one_next', four : 'two_next', five : 'two',})
			} else if(this.state.indexNext == 3){
				this.setState({indexNext : 4, indexPrev : 1, one : 'two', two : 'three', three : 'four', four : 'one_next', five : 'two_next',})
			} else if(this.state.indexNext == 4){
				this.setState({indexNext : 0, indexPrev : 0, one : 'two_next', two : 'two', three : 'three', four : 'four', five : 'one_next',})
			}
	}
	
	prev(){
			if(this.state.indexPrev == 0){
				this.setState({indexNext : 4, indexPrev : 1, one : 'one_prev', two : 'three', three : 'four', four : 'five', five : 'two_prev',})
			} else if(this.state.indexPrev == 1){
				this.setState({indexNext : 3, indexPrev : 2, one : 'three', two : 'four', three : 'five', four : 'two_prev', five : 'one_prev',})
			} else if(this.state.indexPrev == 2){
				this.setState({indexNext : 2, indexPrev : 3, one : 'four', two : 'five', three : 'two_prev', four : 'one_prev', five : 'three',})
			} else if(this.state.indexPrev == 3){
				this.setState({indexNext : 1, indexPrev : 4, one : 'five', two : 'two_prev', three : 'one_prev', four : 'three', five : 'four',})
			} else if(this.state.indexPrev == 4){
				this.setState({indexNext : 0, indexPrev : 0, one : 'two_prev', two : 'one_prev', three : 'three', four : 'four', five : 'five',})
			}
	}
	
	
	
	
	render(){	
	return <div className={this.props.className}>
				<div className="textBlock">{this.props.title}</div>
				<ul>
					<li className={this.state.one}>
						<img src={this.props.data[0].src} alt=""/>
						<div className="textSlide">{this.props.text[0]}</div>
					</li>
					<li className={this.state.two}>
						<img src={this.props.data[1].src} alt=""/>
						<div className="textSlide">{this.props.text[1]}</div>
					</li>
					<li className={this.state.three}>
						<img src={this.props.data[2].src} alt=""/>
						<div className="textSlide">{this.props.text[2]}</div>
					</li>
					<li className={this.state.four}>
						<img src={this.props.data[3].src} alt=""/>
						<div className="textSlide">{this.props.text[3]}</div>
					</li>
					<li className={this.state.five}>
						<img src={this.props.data[4].src} alt=""/>
						<div className="textSlide">{this.props.text[4]}</div>
					</li>
				</ul>
					<a href="#" className="next" onClick={this.next}><img src="../src/index/components/slider/img/next.svg" alt=""/></a>
					<a href="#" className="prev" onClick={this.prev}><img src="../src/index/components/slider/img/next.svg" alt=""/></a>
			</div>
	}
}