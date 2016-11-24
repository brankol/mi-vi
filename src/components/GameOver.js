var React = require('react');

var GameOver = React.createClass({
    onClose: function() {
        this.props.onGameOverClick();
    },
    render: function() {
        return (
            <div className="gameOver dim-screen" onClick={this.onClose}>
 	            	<div className="winner-msg">
	            		Pobjednik je {this.props.winner}
	            	</div>
             </div>
        )
    }
});
module.exports = GameOver;
