import './App.css';
var React = require('react');
var Header = require('./components/Header');
var GameSets = require('./components/GameSets');

var App = React.createClass({
    render: function() {
        return (
            <div className="app-wrap">
				<Header/>
				<GameSets/>
			</div>
        )
    }
});

module.exports = App;
