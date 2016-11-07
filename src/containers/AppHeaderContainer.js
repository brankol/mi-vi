var React = require('react');
var SettingsMenu = require('../components/SettingsMenu');
var GameScore = require('../components/GameScore');

var AppHeaderContainer = React.createClass({
    render: function() {
        return (
            <div className="main-header">
            	<SettingsMenu/>
            	<GameScore/>
            </div>
        )
    }
});

module.exports = AppHeaderContainer;
