var React = require('react');
var AddGameDialog = require('./AddGameDialog');

var _CONST = require('../consts');
var gamesById = require('../models/gamesById');
var setsById = require('../models/setsById');

var GameSet = React.createClass({
    getInitialState: function() {
        return {
            gamesById: gamesById,
            gameTotal: {
                we: 156,
                you: 294
            }
        }
    },
    handleOnAddSubmit: function(newPoints) {
        var set = getNewSet(gamesById, newPoints);
        var newGameTotal = {
            we: set.newData.we + this.state.gameTotal.we,
            you: set.newData.you + this.state.gameTotal.you,
        }

        gamesById[_CONST.ABC + set.index] = set.newData;

        this.setState({
            gamesById: gamesById,
            gameTotal: newGameTotal
        }, function() {
            if (this.state.gameTotal.we >= 1000 || this.state.gameTotal.you >= 1000) {
                this.props.onTotalPoints();
            }
        });
    },
    render: function() {
        return (
            <div className="players-table"> 
                {Object.keys(this.state.gamesById).map(function(key, i){
                     return (
                                <div className="score-row" key={i}>
                                    <div className="score">                
                                        {gamesById[key][_CONST.WE]}
                                    </div>
                                    <div className="score">  
                                        {gamesById[key][_CONST.YOU]}
                                    </div>
                                    <button className="score-delete">delete</button>
                                </div>
                            )
                })}
                <div className="col-left">
                    <AddGameDialog onAddSubmit={this.handleOnAddSubmit} players={_CONST.WE}/> 
                    <div className="player-total-score">
                        <div>{this.state.gameTotal.we}</div>
                    </div>
                </div>
                <div className="col-right">
                    <AddGameDialog onAddSubmit={this.handleOnAddSubmit} players={_CONST.YOU}/>
                    <div className="player-total-score">
                        <div>{this.state.gameTotal.you}</div>
                    </div>
                </div>
            </div>
        )
    }
});

function getNewSet(gamesById, newPoints) {
    var newSet = {};
    var len = Object.keys(gamesById).length;
    len++;

    if (isNaN(newPoints.we)) {
        newSet[_CONST.WE] = newPoints[_CONST.TOTAL] - newPoints[_CONST.YOU];
        newSet[_CONST.YOU] = parseInt(newPoints[_CONST.YOU], 10);
    } else {
        newSet[_CONST.YOU] = newPoints[_CONST.TOTAL] - newPoints[_CONST.WE];
        newSet[_CONST.WE] = parseInt(newPoints[_CONST.WE], 10);
    }
    return {
        newData: newSet,
        index: len
    }
}

module.exports = GameSet;
