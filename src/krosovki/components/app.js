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
			items : this.props.data.map(item => <Item photo={item["src"]} brand={item["brand"]} />),
		}
		this.hover = this.hover.bind(this);
		this.hide = this.hide.bind(this);
		this.sort = this.sort.bind(this);
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
				sexWords.push(sex[i].innerText)
			}
		}
		for(let i = 0; i < color.length; i++){
			if(color[i].children[0].checked){
				colorWords.push(color[i].innerText)
			}
		}
		for(let i = 0; i < brand.length; i++){
			if(brand[i].children[0].checked){
				brandWords.push(brand[i].innerText)
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
		c = c.map(item => <Item photo={item["src"]} brand={item["brand"]} />);
		this.setState({items : c})
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
		
		//каша зависимостей
		if(sexWords.length == 0 && colorWords.length == 0){
				this.setState({items : brandItems.map(item => <Item photo={item["src"]} brand={item["brand"]} />)})
		} else if (colorWords.length == 0 && brandWords.length == 0){
				this.setState({items : sexItems.map(item => <Item photo={item["src"]} brand={item["brand"]} />)})
		} else if (sexWords.length == 0 && brandWords.length == 0){
				this.setState({items : colorItems.map(item => <Item photo={item["src"]} brand={item["brand"]} />)})
		};
													  
		if(sexWords.length == 0 && brandWords.length == 0 && colorWords.length == 0){
				this.setState({items : this.props.data.map(item => <Item photo={item["src"]} brand={item["brand"]} />)})
		};
							  
		if(c.length == 0 && b.length !== 0){
			b = b.map(item => <Item photo={item["src"]} brand={item["brand"]} />);
			this.setState({items : b})	
		} else if(c.length == 0 && z.length !== 0){
			z = z.map(item => <Item photo={item["src"]} brand={item["brand"]} />);
			this.setState({items : z})	
		} else if(c.length == 0 && x.length !== 0){
			x = x.map(item => <Item photo={item["src"]} brand={item["brand"]} />);
			this.setState({items : x})
		};
	}
						  
	
	render(){
				return <div>
		<Header hover={this.hover} hide={this.hide}/>
		<div className={this.state.class}></div>
		<Sort />
			<div className="cont">
				<MenuSort sort={this.sort}/>
				<div>
				{this.state.items}
				</div>
			</div>
		<Footer />
		</div>
	}
}