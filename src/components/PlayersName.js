var React = require('react');

var PlayersName = React.createClass({
    render: function() {
        return (
            <div className="players-header">{this.props.name}</div>
        )
    }
});

module.exports = PlayersName;
