var React = require('react');
var Score = require('../components/Score');

var ScoresList = React.createClass({
    render: function() {
        return (
            <div className="scores-list">                 
                  <Score value="11"/>
                  <Score value="23"/>
                  <Score value="45"/>  
            </div>
        )
    }
});

module.exports = ScoresList;
