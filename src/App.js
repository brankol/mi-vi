import './App.css';
var React = require('react');
var Header = require('./components/Header');
var GameSet = require('./components/GameSet');
var GameOver = require('./components/GameOver')

var App = React.createClass({
    getInitialState: function() {
        return {
            winner: undefined,
            showGameOver: false
        }
    },
    handleGameOverClick: function() {
        addPoint();
        resetGame();
        this.setState({
            showGameOver: false
        })
    },
    handleTotalPoints: function() {
        this.setState({
            showGameOver: true
        })
    },
    render: function() {
        return (
            <div className="app-wrap">
				<Header/>
				<GameSet onTotalPoints={this.handleTotalPoints}/>
				{ this.state.showGameOver ? 
					<GameOver 
						onGameOverClick={this.handleGameOverClick} 
						winner={this.state.winner}/> : null }
			</div>
        )
    }
});

function addPoint() {

}

function resetGame() {

}

module.exports = App;
