var React = require('react');

var Score = React.createClass({
    render: function() {
        return (
            <div className="score score-text-font green-box">
            	Score = {this.props.value}
            </div>
        )
    }
});

module.exports = Score;
