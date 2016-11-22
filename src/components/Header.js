var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <div>
	            <div className="main-header">
	            	<div className="main-menu"></div>
	            	<div>0:0</div>
	            </div>

	            <div className="col-right players-header">Mi</div> 
	            <div className="col-left players-header">Vi</div>
            </div>
        )
    }
});

module.exports = Header;
