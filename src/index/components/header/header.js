import React, { Component } from "react";

export default class Header extends Component{
	constructor(props){
		super(props);
		this.state={}
	}
	
	render(){
	return <header>
		<img src="../src/index/components/header/img/logo.svg" alt="logo" className="logo"/>
		<nav>
			<ul>
				<li> <a href="#">Новинки</a> </li>
				<li> <a href="#">Бренды</a>
					<div>
						<ul>
							<li>adidas Originals</li>
							<li>Alpha Industries</li>
							<li>Arctic Explorer</li>
							<li>ASICS</li>
							<li>Barbour</li>
							<li>Billionaire Boys Club</li>
							<li>C.P. Company</li>
							<li>Canada Goose</li>
							<li>Carhartt WIP</li>
							<li>Casio</li>
						</ul>
						<ul>
							<li>Champion</li>
							<li>Common Project</li>
							<li>Dr. Martens</li>
							<li>Edwin</li>
							<li>Ellesse</li>
							<li>Fear of God</li>
							<li>Fjallraven</li>
							<li>Fred Perry</li>
							<li>Golden Goose</li>
							<li>Helly Hansen</li>
						</ul>
						<ul>
							<li>Helmut Lang</li>
							<li>Jordan</li>
							<li>JW Anderson</li>
							<li>Lacoste</li>
							<li>Lyle & Scott</li>
							<li>M+RC Noir</li>
							<li>Maison Margiela</li>
							<li>MArcelo Burlon</li>
							<li>Master-piece</li>
							<li>MCQ</li>
						</ul>
						<ul>
							<li>Medicom Toy</li>
							<li>Nanamica</li>
							<li>Napapijri</li>
							<li>New Balance</li>
							<li>Nike</li>
							<li>Norse Project</li>
							<li>Polo Ralph Lauren</li>
							<li>Premiata</li>
							<li>Puma</li>
							<li>Reebok</li>
						</ul>
						<ul>
							<li>Rick Owens</li>
							<li>Ripndip</li>
							<li>Saucony</li>
							<li>Stone Island</li>
							<li>Stussy</li>
							<li>The North Face</li>
							<li>Tommy Jeans</li>
							<li>Weekend Offender</li>
							<li>Y-3</li>
							<li><span>Показать все</span></li>
						</ul>
					</div></li>
				<li> <a href="#">Мужское</a>
					<div>
						<ul>
							<li><span>Обувь</span></li>
							<li>Осенняя</li>
							<li>Кросовки</li>
							<li>Ботинки</li>
							<li>Кеды</li>
							<li>Сланцы</li>
							<li>Sneakers</li>
						</ul>

						<ul>
							<li><span>Верхняя Одежда</span></li>
							<li>Все куртки</li>
							<li>Осенние</li>
							<li>Парки</li>
							<li>Анораки</li>
							<li>Ветровки</li>
							<li>Аляски</li>
						</ul>

						<ul>
							<li><span>Одежда</span></li>
							<li>Свитера</li>
							<li>Толстовки</li>
							<li>Рубашки</li>
							<li>Лонгсливы</li>
							<li>Поло</li>
							<li>Футболки</li>
							<li>Джинсы</li>
							<li>Брюки</li>
							<li>Шорты</li>
						</ul>
					</div></li>
				<li> <a href="#">Женское</a>
					<div>
						<ul>
							<li><span>Обувь</span></li>
							<li>Осенняя</li>
							<li>Кросовки</li>
							<li>Ботинки</li>
							<li>Кеды</li>
							<li>Сланцы</li>
							<li>Sneakers</li>
						</ul>
						<ul>
							<li><span>Верхняя Одежда</span></li>
							<li>Все куртки</li>
							<li>Осенние</li>
							<li>Пуховики</li>
							<li>Ветровки</li>
							<li>Бомберы</li>
						</ul>
						<ul>
							<li><span>Одежда</span></li>
							<li>Свитера</li>
							<li>Толстовки</li>
							<li>Олимпийки</li>
							<li>Платья</li>
							<li>Рубашки</li>
							<li>Лонгсливы</li>
							<li>Поло</li>
							<li>Футболки</li>
							<li>Брюки</li>
							<li>Юбки</li>
							<li>Шорты</li>
						</ul>
					</div></li>
				<li> <a href="#">Аксессуары</a>
					<div>
						<ul>
							<li><span>Зимние</span></li>
							<li>Шарфы</li>
							<li>Шапки</li>
							<li>Перчатки</li>
						</ul>
						<ul>
							<li><span>Прочее</span></li>
							<li>Игрушки</li>
							<li>Наручные часы</li>
							<li>Гаджеты</li>
							<li>Очки</li>
							<li>Кошельки</li>
							<li>Ремни</li>
							<li>Кепки</li>
							<li>Панамы</li>
							<li>Нижнее белье</li>
							<li>Носки</li>
							<li>Подарочные сертификаты</li>
							<li>Уход за обувью</li>
						</ul>
						<ul>
							<li><span>Рюкзаки и сумки</span></li>
							<li>Рюкзаки</li>
							<li>Сумки</li>
							<li>Сумки на пояс</li>
						</ul>
						<ul>
							<li><span>Красота</span></li>
							<li>Для лица</li>
							<li>Для тела</li>
							<li>Для лица</li>
						</ul>
					</div></li>
				<li> <a href="#">Скидки</a>
					<div>
						<ul>
							<li><span>Обувь</span></li>
							<li>Кросовки</li>
							<li>Ботинки</li>
							<li>Кеды</li>
						</ul>
						<ul>
							<li><span>Верхняя одежда</span></li>
							<li>Все куртки</li>
							<li>Бомберы</li>
							<li>Анораки</li>
							<li>Стеганые куртки</li>
							<li>Джинсовые куртки</li>
							<li>Ветровки</li>
							<li>Плащи</li>
						</ul>
						<ul>
							<li><span>Одежда</span></li>
							<li>Джинсы</li>
							<li>Поло</li>
							<li>Свитера</li>
							<li>Футболки</li>
							<li>Шорты</li>
							<li>Толстовки</li>
							<li>Рубашки</li>
							<li>Брюки</li>
						</ul>
						<ul>
							<li><span>Аксессуары</span></li>
							<li>Кепки</li>
							<li>Нижнее белье</li>
							<li>Носки</li>
							<li>Сумки</li>
							<li>Рюкзаки</li>
						</ul>
					</div></li>	
			</ul>
		</nav>
		<div>
			<img src="../src/index/components/header/img/bag.svg" alt=""/>
			<img src="../src/index/components/header/img/search.svg" alt=""/>
			<img src="../src/index/components/header/img/profile.svg" alt=""/>
		</div>
		</header>
	}
}