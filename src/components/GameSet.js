var React = require('react');
var AddGameDialog = require('./AddGameDialog');

var _CONST = require('../consts');
var gamesById = require('../models/gamesById');
var setsById = require('../models/setsById');

var GameSet = React.createClass({
    getInitialState: function() {
        return {
            gamesById: gamesById
        }
    },
    handleOnAddSubmit: function(newPoints) {
        var set = getNewSet(gamesById, newPoints);
        gamesById[_CONST.ABC + set.index] = set.newData;

        this.setState({
            gamesById: gamesById
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
                    <AddGameDialog onAddSubmit={this.handleOnAddSubmit}/> 
                </div>
                <div className="col-right">
                    <AddGameDialog onAddSubmit={this.handleOnAddSubmit}/>
                </div>
            </div>
        )
    }
});

// TODO: PURE F ?
function getNewSet(gamesById, newPoints) {
    var len = Object.keys(gamesById).length;
    len++;
    var newSet = {
        'we': parseInt(newPoints[_CONST.WE], 10),
        'you': parseInt(newPoints[_CONST.YOU], 10),
        'total': parseInt(newPoints[_CONST.TOTAL], 10)
    };
    return {
        newData: newSet,
        index: len
    }
}

module.exports = GameSet;
