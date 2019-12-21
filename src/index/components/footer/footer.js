import React, { Component } from "react";

export default class Footer extends Component{
	constructor(props){
		super(props);
		this.state={}
	}
	
	render(){
	return <footer>
		<div className="one_footer">
			<div className="phone">
				<h1>Телефоны</h1>
				<p>8 (800) 775-28-34 <br/> 8 (495) 544-57-70</p>
			</div>
			<div className="social">
				<h1>Социальные сети</h1>
				<ul>
				<li><a href="https://www.instagram.com/brandshopru/"><img src="../src/index/components/footer/img/instagram.png" /></a></li>
				<li><a href="https://vk.com/brandshop_ru"><img src="../src/index/components/footer/img/vk.png" /></a></li>
				<li><a href="https://www.facebook.com/brandshop.ru"><img src="../src/index/components/footer/img/facebook.png" /></a></li>
				<li><a href="https://www.youtube.com/user/brandshoprus"><img src="../src/index/components/footer/img/youtube.png" /></a></li>
				<li><a href="https://twitter.com/brandshopru"><img src="../src/index/components/footer/img/twitter.png" /></a></li>
				</ul>
			</div>
			<div className="mailing">
				<h1>Рассылка</h1>
				<input type="text" placeholder="Введите ваш email" />
				<button>Подписаться</button>
			</div>
		</div>
		
		
		<div className="two_footer">
			<img src="../src/index/components/footer/img/logo.svg" title="brandshop"/>
			<div className="pay">
				<h1>Способы оплаты</h1>
				<ul>
					<li><img src="../src/index/components/footer/img/mastercard.png" title="MasterCard"/></li>
					<li><img src="../src/index/components/footer/img/visa.png" title="Visa"/></li>
					<li><img src="../src/index/components/footer/img/mir.png" title="Мир"/></li>
				</ul>
				<p>Вы можете оплатить покупки <br/> наличными при получении.</p>
			</div>
			<nav>
				<ul>
					<li><a href="#" onClick={function(){event.preventDefault()}}>Помощь покупателю</a></li>
					<li><a href="#" onClick={function(){event.preventDefault()}}>Доставка и оплата</a></li>
					<li><a href="#" onClick={function(){event.preventDefault()}}>Возврат</a></li>
					<li><a href="#" onClick={function(){event.preventDefault()}}>Программа лояльности</a></li>
					<li><a href="#" onClick={function(){event.preventDefault()}}>Контакты</a></li>
				</ul>
				<ul>
					<li><a href="#" onClick={function(){event.preventDefault()}}>Новости</a></li>
					<li><a href="#" onClick={function(){event.preventDefault()}}>Sneakers</a></li>
					<li><a href="#" onClick={function(){event.preventDefault()}}>Yeezy</a></li>
					<li><a href="#" onClick={function(){event.preventDefault()}}>О проекте</a></li>
					<li><a href="#" onClick={function(){event.preventDefault()}}>Вакансии</a></li>
				</ul>
			</nav>
		</div>
		<div className="three_footer">
			<img src="../src/index/components/footer/img/secure.png" title="Comodo secure"/>
			<span>©BRANDSHOP,2019</span>
			<a href="#" onClick={function(){event.preventDefault()}}>Карта сайта</a>
			<a href="#" onClick={function(){event.preventDefault()}}>Пользовательское соглашение</a>
			<a href="#" onClick={function(){event.preventDefault()}}>Политика о конфиденциальности</a>
		</div>
		</footer>
	}
}