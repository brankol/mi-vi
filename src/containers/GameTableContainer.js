var React = require('react');

var PlayersName = require('../components/PlayersName');
var TableTotal = require('../components/TableTotal');
var AddScoreContainer = require('./AddScoreContainer');
var ScoresListContainer = require('./ScoresListContainer');

var GameTableContainer = React.createClass({
    render: function() {
        return (
            <div className="players-table">                 
                <PlayersName name={this.props.name}/>          
                <ScoresListContainer/>      
                <AddScoreContainer />
                <TableTotal/>
            </div>
        )
    }
});

module.exports = GameTableContainer;
