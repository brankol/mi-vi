import './App.css';
var React = require('react');
var Header = require('./components/Header');
var GameSet = require('./components/GameSet');

var App = React.createClass({
    render: function() {
        return (
            <div className="app-wrap">
				<Header/>
				<GameSet/>
			</div>
        )
    }
});

module.exports = App;
