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
			itemsOpen : this.props.data,
			itemsExit : this.props.data.map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]}/>),
			index : "normal",
			qwe : '',
					
		}
		this.hover = this.hover.bind(this);
		this.hide = this.hide.bind(this);
		this.sort = this.sort.bind(this);
		this.sortPriceBig = this.sortPriceBig.bind(this);
		this.sortPriceSmall = this.sortPriceSmall.bind(this);
		this.sortPriceNormal = this.sortPriceNormal.bind(this);
	}
	
	hover(){
		this.setState({class : "shadow"});
	}
	
	hide(){
		this.setState({class : "shadow_hide"});
	}
	
	sort(e){
		let a = e.target.parentNode.parentNode.parentNode.children;
		let sex = a[0].children;
		let color = a[1].children;
		let brand = a[2].children;
		let sexWords = [], colorWords = [], brandWords = [], sexItems = [], colorItems = [], brandItems = [], b = [], c = [], z = [], x = [];
		//получаем ключевые слова из списков
		for(let i = 0; i < sex.length; i++){
			if(sex[i].children[0].checked){
				sexWords.push(sex[i].children[1].innerText)
			}
		}
		for(let i = 0; i < color.length; i++){
			if(color[i].children[0].checked){
				colorWords.push(color[i].children[1].innerText)
			}
		}
		for(let i = 0; i < brand.length; i++){
			if(brand[i].children[0].checked){
				brandWords.push(brand[i].children[1].innerText)
			}
		}
		//фильтруем по ключевым словам
		sexItems = this.props.data.filter(function(item){
				for (let i = 0; i < sexWords.length; i++){
				if(item["sex"] == sexWords[i]){
					return true
				}
			}
		});
		colorItems = this.props.data.filter(function(item){
				for (let i = 0; i < colorWords.length; i++){
				if(item["color"] == colorWords[i]){
					return true
				}
			}
		});
		brandItems = this.props.data.filter(function(item){
				for (let i = 0; i < brandWords.length; i++){
				if(item["brand"] == brandWords[i]){
					return true
				}
			}
		});
		//находим общие значения из трёх массивов и меняем состояние
		b = colorItems.filter(function(item){
			for(let i = 0; i < sexItems.length; i++){
				if(item == sexItems[i]) return true;
			}
		});
		c = brandItems.filter(function(item){
			for(let i = 0; i < b.length; i++){
				if(item == b[i]) return true;
			}
		});
		if(this.state.index == "big"){
			this.setState({itemsOpen : c, itemsExit : c.slice().sort((a, b) => a.price > b.price ? 1 : -1).map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]} />)});
		} else if (this.state.index == "small"){
			this.setState({itemsOpen : c, itemsExit : c.slice().sort((a, b) => a.price < b.price ? 1 : -1).map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]} />)});
		} else if(this.state.index == "normal"){
			this.setState({itemsOpen : c, itemsExit : c.map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]} />)});	
			}
		//общие значения из первого и второго массива
		z = brandItems.filter(function(item){
			for(let i = 0; i < sexItems.length; i++){
				if(item == sexItems[i]) return true;
			}
		})
		//общие значения из второго и третьего массива
		x = brandItems.filter(function(item){
			for(let i = 0; i < colorItems.length; i++){
				if(item == colorItems[i]) return true;
			}
		})
		//зависимости если фильтруем только по одному свойству
		if(sexWords.length == 0 && colorWords.length == 0){
		//проверка на сортировку по цене
		if(this.state.index == "big"){
			this.setState({itemsOpen : brandItems, itemsExit : brandItems.slice().sort((a, b) => a.price > b.price ? 1 : -1).map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]} />)})
		} else if (this.state.index == "small"){
			this.setState({itemsOpen : brandItems, itemsExit : brandItems.slice().sort((a, b) => a.price < b.price ? 1 : -1).map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]} />)})		   
		} else if(this.state.index == "normal"){
			this.setState({itemsOpen : brandItems, itemsExit : brandItems.map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]} />)})
		}
		} else if (colorWords.length == 0 && brandWords.length == 0){
		//проверка на сортировку по цене
		if(this.state.index == "big"){	   
			this.setState({itemsOpen : sexItems, itemsExit : sexItems.slice().sort((a, b) => a.price > b.price ? 1 : -1).map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]} />)})
		} else if (this.state.index == "small"){
			this.setState({itemsOpen : sexItems, itemsExit : sexItems.slice().sort((a, b) => a.price < b.price ? 1 : -1).map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]} />)})
		} else if(this.state.index == "normal")	{
			this.setState({itemsOpen : sexItems, itemsExit : sexItems.map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]} />)})
		}	   	   
		} else if (sexWords.length == 0 && brandWords.length == 0){
		//проверка на сортировку по цене
		if(this.state.index == "big"){
			this.setState({itemsOpen : colorItems, itemsExit : colorItems.slice().sort((a, b) => a.price > b.price ? 1 : -1).map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]} />)})
		} else if (this.state.index == "small"){
			this.setState({itemsOpen : colorItems, itemsExit : colorItems.slice().sort((a, b) => a.price < b.price ? 1 : -1).map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]} />)})			   
		}	else if(this.state.index == "normal"){
				this.setState({itemsOpen : colorItems, itemsExit : colorItems.map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]} />)})
		}		   	   
		};
		//обычное состояние										  
		if(sexWords.length == 0 && brandWords.length == 0 && colorWords.length == 0){
		//проверка на сортировку по цене
		if(this.state.index == "big"){
				this.setState({itemsOpen : this.props.data, itemsExit : this.props.data.slice().sort((a, b) => a.price > b.price ? 1 : -1).map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]} />)})
		} else if (this.state.index == "small"){
					this.setState({itemsOpen : this.props.data, itemsExit : this.props.data.slice().sort((a, b) => a.price < b.price ? 1 : -1).map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]} />)})
		}	else if(this.state.index == "normal"){
				this.setState({itemsOpen : this.props.data, itemsExit : this.props.data.map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]} />)})
		}   
		};
		//нахождение общих элементов если задействованы 2 свойства				  
		if(c.length == 0 && b.length !== 0){
		//проверка на сортировку по цене
		if(this.state.index == "big"){
			this.setState({itemsOpen : b, itemsExit : b.slice().sort((a, b) => a.price > b.price ? 1 : -1).map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]} />)})
		} else if (this.state.index == "small"){
			this.setState({itemsOpen : b, itemsExit : b.slice().sort((a, b) => a.price < b.price ? 1 : -1).map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]} />)})				   
		}else if(this.state.index == "normal"){
			this.setState({itemsOpen : b, itemsExit : b.map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]} />)})	
		}		
	
		} else if(c.length == 0 && z.length !== 0){
		//проверка на сортировку по цене
		if(this.state.index == "big"){
			this.setState({itemsOpen : z, itemsExit : z.slice().sort((a, b) => a.price > b.price ? 1 : -1).map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]} />)})			   
		} else if (this.state.index == "small"){
			this.setState({itemsOpen : z, itemsExit : z.slice().sort((a, b) => a.price < b.price ? 1 : -1).map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]} />)})	
		} else if(this.state.index == "normal")	{
			this.setState({itemsOpen : z, itemsExit : z.map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]} />)})	
		}		   	   

		} else if(c.length == 0 && x.length !== 0){
		//проверка на сортировку по цене
		if(this.state.index == "big"){
			this.setState({itemsOpen : x, itemsExit : x.slice().sort((a, b) => a.price > b.price ? 1 : -1).map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]} />)})
		} else if (this.state.index == "small"){
			this.setState({itemsOpen : x, itemsExit : x.slice().sort((a, b) => a.price < b.price ? 1 : -1).map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]} />)})	
		} else if(this.state.index == "normal") {
			this.setState({itemsOpen : x, itemsExit : x.map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]} />)})
		}			   		   
		};
		//если задействованы 3 свойства но общих элементов нет
		if(sexWords.length !== 0 && brandWords.length !== 0 && colorWords.length !== 0 & c.length == 0){
			this.setState({itemsOpen : c, itemsExit : c.map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]} />) });
		}
	}
		
	sortPriceBig(){
		this.setState({index : "big", itemsOpen : this.state.itemsOpen, itemsExit : this.state.itemsOpen.slice().sort((a, b) => a.price > b.price ? 1 : -1).map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]}/>)});
	}
	sortPriceSmall(){
		this.setState({index : "small", itemsOpen : this.state.itemsOpen, itemsExit : this.state.itemsOpen.slice().sort((a, b) => a.price < b.price ? 1 : -1).map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]}/>)});
	}
	sortPriceNormal(){
		this.setState({index : "normal", itemsOpen : this.state.itemsOpen, itemsExit : this.state.itemsOpen.map(item => <Item photo={item["src"]} brand={item["brand"]} key={item["id"]} price={item["price"]}/>)})
	}
																											
							
	render(){
				return <div>
		<Header hover={this.hover} hide={this.hide}/>
		<div className={this.state.class}></div>
		<Sort sortPriceBig={this.sortPriceBig} sortPriceSmall={this.sortPriceSmall} sortPriceNormal={this.sortPriceNormal} />
			<div className="cont">
				<MenuSort sort={this.sort}/>
				<div className="item_list">
				{this.state.itemsExit}
				</div>
			</div>
		<Footer />
		</div>
	}
}