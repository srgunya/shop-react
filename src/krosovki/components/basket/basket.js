import React, { Component } from "react";

export default class Basket extends Component{
	constructor(props){
		super(props);
		this.state = {};
	}
	
	render(){
      let items = this.props.items;
      let renderItems = [];
	  let summa = 0;
		
		for(let i in items){
			let item;
			for(let j in this.props.itemsList){
				if(i == this.props.itemsList[j]['id']){
					item = this.props.itemsList[j];
				}
			}
			
			let {id,srcMini,price} = item;
			summa += items[i]*price;
			
			renderItems.push(
			<div key={i} class="basket_item">
				<a href ="#" ><img src={srcMini} /></a>
				<span>{items[i]}шт.</span>
				<span>{items[i]*price}руб.</span>
				<a href ="#" id={i} onClick={e =>{
				this.props.removeBasket(i);
				e.preventDefault()}}>удалить</a>
			</div>
			)
		}
			renderItems.push(
			<div key='x2'>
				<span>Всего: {summa}руб.</span>
			</div>
			)
	return <div className={this.props.basket}>
		{renderItems}
		</div>
	}
}