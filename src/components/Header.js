var React = require('react');

var Header = React.createClass({
    getInitialState: function() {
        return {
            weTotal: 1,
            youTotal: 2
        }

    },
    render: function() {
        return (
            <div>
	            <div className="main-header">
	            	<div className="main-menu"></div>
	            	<div>{this.state.weTotal}:{this.state.youTotal}</div>
	            </div>

	            <div className="col-right players-header">We</div> 
	            <div className="col-left players-header">You</div>
            </div>
        )
    }
});

module.exports = Header;
