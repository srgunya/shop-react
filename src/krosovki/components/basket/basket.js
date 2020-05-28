import React, { Component } from "react";

export default class Basket extends Component{
	constructor(props){
		super(props);
		this.state = {
			index : 0,
		};
	}
	
	render(){
		
      let items = this.props.items;
      let renderItems = [];
		let renderTotal = [];
	  let summa = 0;
		for(let i in items){
			let item;
			for(let j in this.props.itemsList){
				if(i == this.props.itemsList[j]['id']){
					item = this.props.itemsList[j];
				}
			}
			
			let {id,srcMini,price,brand,title} = item;
			summa += items[i]*price;
			
			renderItems.push(
			<div key={i} className="basket_item">
				<a href ="#" ><img src={srcMini} /></a>
				<span className="item_brand">{title}</span>
				<span className="item_quantity"><span onClick={e =>
				{if(items[i] == 1){this.props.removeBasket(i)};items[i]=items[i]-1;this.setState({index : this.state.index--})}}>-</span> {items[i]} <span onClick={e =>{items[i]=items[i]+1;this.setState({index : this.state.index++})}}>+</span></span>
				<span className="item_price">{items[i]*price} ₽</span>
				<div className="ex" id={i} onClick={e =>{this.props.removeBasket(i); e.preventDefault()}}>
				<div className="left_ex"></div>
				<div className="right_ex"></div>
				</div>
				
			</div>
			)
		}
		if(renderItems.length == 0){
			renderTotal.push(
				<div key="x1" className="totalNone">Ваша корзина пуста :(</div>
			)
		} else {
			renderTotal.push(
			<div key='x2' className="total">
			<button>Оформление заказа</button>
			<span className="summa">Сумма заказа {summa} ₽</span>
			</div>
		)
		}
		

	return <div className={this.props.basket}>
		<div className="basket_list">
		{renderItems}
		</div>
		{renderTotal}
		</div>
	}
}