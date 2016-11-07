import './App.css';
var React = require('react');
var AppHeaderContainer = require('./containers/AppHeaderContainer');
var GameTableContainer = require('./containers/GameTableContainer');

var App = React.createClass({
    render: function() {
        return (
            <div className="app-wrap">
				<AppHeaderContainer/>
				<GameTableContainer name={"we"}/>
				<GameTableContainer name={"you"}/>			 
			</div>
        )
    }
});

module.exports = App;
