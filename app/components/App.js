var React = require('react');
var ReactDOM = require('react-dom');

var ListItems = React.createClass({

	getInitialState: function(){
		return {click: false};
	},

	clickHandle: function(){
		var click = !this.state.click;

		this.setState({click: click});

		this.props.addAmount(click ? this.props.price : -this.props.price);
	},

	render: function(){

		return <p className={this.state.click ? 'active' : ''} onClick={this.clickHandle}>
			{this.props.name} <b>Rupees: {this.props.price}</b>
		</p>
	}
});

var App = React.createClass({

	getInitialState: function(){
		return {total: 0};
	},

	addAmount: function(price){
		this.setState({total: price + this.state.total});
	},

	render: function(){

		var soups = this.props.soup.map(s => <ListItems name={s.name} price={s.price} addAmount={this.addAmount} />);
		var southindians = this.props.southindian.map(s => <ListItems name={s.name} price={s.price} addAmount={this.addAmount} />);
		var starters = this.props.starter.map(s => <ListItems name={s.name} price={s.price} addAmount={this.addAmount} />);
		var norths = this.props.north.map(s => <ListItems name={s.name} price={s.price} addAmount={this.addAmount} />);
		var chineses = this.props.chinese.map(s => <ListItems name={s.name} price={s.price} addAmount={this.addAmount} />);
		var deserts = this.props.desert.map(s => <ListItems name={s.name} price={s.price} addAmount={this.addAmount} />);

		return (
			<div>

				<h1>Menu</h1>

				<h2>Soups</h2>
				<div className="food">
				{soups}
				</div>

				<h2>South Taste</h2>
				<div className="food">
				{southindians}
				</div>

				<h2>Starters</h2>
				<div className="food">
				{starters}
				</div>

				<h2>North ka Chaska</h2>
				<div className="food">
				{norths}
				</div>

				<h2>Ching Chinese</h2>
				<div className="food">
				{chineses}
				</div>

				<h2>Desert</h2>
				<div className="food">
				{deserts}
				</div>

			<p id='sum'>Total <b>Rupees: {this.state.total}</b></p>
			
		</div>
			);
	}
});

module.exports = App;















