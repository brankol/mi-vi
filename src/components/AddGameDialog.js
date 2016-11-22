var React = require('react');

var AddGameDialog = React.createClass({
    getInitialState: function() {
        return {
            showAddPoint: false,
            we: 0,
            you: 0,
            total: 0
        }
    },
    onOpenAddScore: function() {
        this.setState({ showAddScore: true });
    },
    onNewScoreSubmit: function() {
        this.props.onAddSubmit(this.state);
        this.setState({ showAddScore: false });
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
                                            <label htmlFor="game point">Mi:</label>
                                            <label htmlFor="game point">Vi:</label>
                                        </div>
                                        <div className="col-r">
                                            <input type="text" onChange={this.onGameTotalChange}/>
                                            <input type="text" onChange={this.onNewPointChange.bind(this, 'we')}/>
                                            <input type="text" onChange={this.onNewPointChange.bind(this, 'you')}/>
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
    onAddSubmit: React.PropTypes.func.isRequired

};


module.exports = AddGameDialog;
