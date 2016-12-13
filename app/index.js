var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

var soup = [
	{ name: 'Tomato Soup', price: 70 },
	{ name: 'Clear Soup', price: 60 },
	{ name: 'Sweet Corn Soup', price: 80 },
	{ name: 'Manchow Soup', price: 90 }
];

var southindian = [
	{ name: 'Sada Dosa', price: 30 },
	{ name: 'Masala Dosa', price: 40 },
	{ name: 'Mysore Dosa', price: 60 },
	{ name: 'Paper Dosa', price: 70 },
	{ name: 'Idli Sambhar', price: 40 },
	{ name: 'Mendu Wada', price: 50 },
];

var starter = [
	{ name: 'Veg. Cutlet', price: 40 },
	{ name: 'Paneer Pakode', price: 40 },
	{ name: 'Chinese Balls', price: 50 },
	{ name: 'Cabage Roll', price: 45},
	{ name: 'Veg. Mexico', price: 60}
];

var north = [
	{ name: 'Naan', price: 10 },
	{ name: 'Veg. Kadai', price: 100},
	{ name: 'Veg. Bukhara', price: 110},
	{ name: 'Veg. Kolhapuri', price: 90},
	{ name: 'Veg. Handi', price: 80},
	{ name: 'Paneer Tikka', price: 110},
	{ name: 'Sweet Paneer', price: 90},
];

var chinese = [
	{ name: 'Hakka Noodles', price: 90},
	{ name: 'Schezwan Noodles', price: 100},
	{ name: 'Veg. Manchurian(Dry)', price: 90},
	{ name: 'Veg. Manchurian(Gravy)', price: 120},
	{ name: 'Veg. Paneer Chilli', price: 90},
];

var desert = [
	{ name: 'Jalebi', price: 50},
	{ name: 'Gulab Jamun', price: 60},
	{ name: 'RasGulla', price: 70},
	{ name: 'Ras Malai', price: 70},
	{ name: 'Basundi', price: 60},
];

ReactDOM.render(<App soup={soup} starter={starter} north={north} southindian={southindian} chinese={chinese} desert={desert}/>, document.getElementById('app'));












