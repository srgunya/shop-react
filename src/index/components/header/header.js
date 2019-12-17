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
				<li> <a href="#" onClick={function(){event.preventDefault()}}>Новинки</a> </li>
				<li> <a href="#" onClick={function(){event.preventDefault()}}>Бренды</a>
					<div>
						<ul>
							<li><a href="#" onClick={function(){event.preventDefault()}}>adidas Originals</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Alpha Industries</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Arctic Explorer</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>ASICS</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Barbour</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Billionaire Boys Club</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>C.P. Company</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Canada Goose</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Carhartt WIP</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Casio</a></li>
						</ul>
						<ul>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Champion</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Common Project</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Dr. Martens</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Edwin</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Ellesse</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Fear of God</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Fjallraven</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Fred Perry</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Golden Goose</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Helly Hansen</a></li>
						</ul>
						<ul>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Helmut Lang</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Jordan</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>JW Anderson</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Lacoste</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Lyle & Scott</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>M+RC Noir</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Maison Margiela</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>MArcelo Burlon</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Master-piece</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>MCQ</a></li>
						</ul>
						<ul>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Medicom Toy</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Nanamica</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Napapijri</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>New Balance</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Nike</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Norse Project</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Polo Ralph Lauren</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Premiata</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Puma</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Reebok</a></li>
						</ul>
						<ul>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Rick Owens</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Ripndip</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Saucony</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Stone Island</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Stussy</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>The North Face</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Tommy Jeans</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Weekend Offender</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Y-3</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}><span>Показать все</span></a></li>
						</ul>
					</div></li>
				<li> <a href="#" onClick={function(){event.preventDefault()}}>Мужское</a>
					<div>
						<ul>
							<li><a href="#" onClick={function(){event.preventDefault()}}><span>Обувь</span></a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Осенняя</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Кросовки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Ботинки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Кеды</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Сланцы</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Sneakers</a></li>
						</ul>

						<ul>
							<li><a href="#" onClick={function(){event.preventDefault()}}><span>Верхняя Одежда</span></a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Все куртки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Осенние</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Парки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Анораки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Ветровки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Аляски</a></li>
						</ul>

						<ul>
							<li><a href="#" onClick={function(){event.preventDefault()}}><span>Одежда</span></a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Свитера</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Толстовки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Рубашки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Лонгсливы</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Поло</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Футболки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Джинсы</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Брюки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Шорты</a></li>
						</ul>
					</div></li>
				<li> <a href="#" onClick={function(){event.preventDefault()}}>Женское</a>
					<div>
						<ul>
							<li><a href="#" onClick={function(){event.preventDefault()}}><span>Обувь</span></a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Осенняя</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Кросовки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Ботинки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Кеды</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Сланцы</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Sneakers</a></li>
						</ul>
						<ul>
							<li><a href="#" onClick={function(){event.preventDefault()}}><span>Верхняя Одежда</span></a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Все куртки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Осенние</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Пуховики</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Ветровки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Бомберы</a></li>
						</ul>
						<ul>
							<li><a href="#" onClick={function(){event.preventDefault()}}><span>Одежда</span></a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Свитера</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Толстовки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Олимпийки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Платья</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Рубашки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Лонгсливы</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Поло</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Футболки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Брюки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Юбки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Шорты</a></li>
						</ul>
					</div></li>
				<li> <a href="#" onClick={function(){event.preventDefault()}}>Аксессуары</a>
					<div>
						<ul>
							<li><a href="#" onClick={function(){event.preventDefault()}}><span>Зимние</span></a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Шарфы</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Шапки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Перчатки</a></li>
						</ul>
						<ul>
							<li><a href="#" onClick={function(){event.preventDefault()}}><span>Прочее</span></a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Игрушки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Наручные часы</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Гаджеты</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Очки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Кошельки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Ремни</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Кепки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Панамы</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Нижнее белье</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Носки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Подарочные сертификаты</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Уход за обувью</a></li>
						</ul>
						<ul>
							<li><a href="#" onClick={function(){event.preventDefault()}}><span>Рюкзаки и сумки</span></a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Рюкзаки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Сумки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Сумки на пояс</a></li>
						</ul>
						<ul>
							<li><a href="#" onClick={function(){event.preventDefault()}}><span>Красота</span></a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Для лица</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Для тела</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Для лица</a></li>
						</ul>
					</div></li>
				<li> <a href="#" onClick={function(){event.preventDefault()}}>Скидки</a>
					<div>
						<ul>
							<li><a href="#" onClick={function(){event.preventDefault()}}><span>Обувь</span></a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Кросовки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Ботинки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Кеды</a></li>
						</ul>
						<ul>
							<li><a href="#" onClick={function(){event.preventDefault()}}><span>Верхняя одежда</span></a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Все куртки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Бомберы</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Анораки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Стеганые куртки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Джинсовые куртки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Ветровки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Плащи</a></li>
						</ul>
						<ul>
							<li><a href="#" onClick={function(){event.preventDefault()}}><span>Одежда</span></a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Джинсы</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Поло</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Свитера</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Футболки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Шорты</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Толстовки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Рубашки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Брюки</a></li>
						</ul>
						<ul>
							<li><a href="#" onClick={function(){event.preventDefault()}}><span>Аксессуары</span></a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Кепки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Нижнее белье</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Носки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Сумки</a></li>
							<li><a href="#" onClick={function(){event.preventDefault()}}>Рюкзаки</a></li>
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