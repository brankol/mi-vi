var React = require('react');
var _CONST = require('../consts');

var AddGameDialog = React.createClass({
    getInitialState: function() {
        return {
            showAddPoint: false
        }
    },
    onOpenAddScore: function() {
        this.setState({ showAddScore: true });
    },
    onNewScoreSubmit: function() {
        if (this.state.total === undefined) {
            alert("total === undefined");
        } else {
            this.props.onAddSubmit(this.state);
            this.setState({ showAddScore: false });
        }
    },
    onNewPointChange: function(name, e) {
        var change = {};
        change[name] = e.target.value;
        this.setState(change);
    },
    onGameTotalChange: function(e) {
        this.setState({
            total: e.target.value
        });
    },
    render: function() {
        return (
            <div>
                    <div onClick={this.onOpenAddScore} className="cp-add-score-button add-button">+</div>
                    {
                        this.state.showAddScore ?  
                            <div>
                                <div className="cp-add-score-dialog">
                                    <div className="score-add-popup green-box">
                                        <div className="col-l">
                                            <label htmlFor="game total">Game total:</label>
                                            <label htmlFor="game point">{this.props.players}:</label>
                                        </div>
                                        <div className="col-r">
                                            <input type="text" onChange={this.onGameTotalChange}/>
                                            <input type="text" onChange={this.onNewPointChange.bind(this, this.props.players)}/>
                                        </div> 
                                        <button onClick={this.onNewScoreSubmit}>Ok</button>  
                                    </div>
                                </div>
                            </div> : null
                    }
                </div>
        )
    }
});

AddGameDialog.propTypes = {
    onAddSubmit: React.PropTypes.func.isRequired,
    players: React.PropTypes.string.isRequired
};

module.exports = AddGameDialog;
