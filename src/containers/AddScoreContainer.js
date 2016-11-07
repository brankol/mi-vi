var React = require('react');
var AddScoreButton = require('../components/AddScoreButton');
var AddScoreDialog = require('../components/AddScoreDialog');

var AddScoreContainer = React.createClass({
    render: function() {
        return (
            <div>
                <AddScoreButton/>
                <AddScoreDialog/>                 
            </div>
        )
    }
});

module.exports = AddScoreContainer;
