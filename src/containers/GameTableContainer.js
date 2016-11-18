var React = require('react');

var ScoresList = require('../components/ScoresList');
var PlayersName = require('../components/PlayersName');
var TableTotal = require('../components/TableTotal');
var AddScoreContainer = require('./AddScoreContainer');

var GameTableContainer = React.createClass({
    render: function() {
        return (
            <div className="players-table">                 
                <PlayersName name={this.props.name}/>          
                <ScoresList/>      
                <AddScoreContainer/>
                <TableTotal/>
            </div>
        )
    }
});

module.exports = GameTableContainer;
