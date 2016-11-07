var React = require('react');

var AddScoreDialog = React.createClass({
    render: function() {
        return (
            <div className="score-add-popup green-box">
            	<div className="col-l">
              		<label htmlFor="game total">Game total:</label>
                	<label htmlFor="game point">Mi:</label>
            	</div>
            	<div className="col-r">
                	<input type="text" defaultValue="1000"/>
                	<input type="text" defaultValue="0"/>
                </div> 
                <button> Ok </button>  
            </div>
        )
    }
});

module.exports = AddScoreDialog;
