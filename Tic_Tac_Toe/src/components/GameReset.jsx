import GameState from "./GameState";

function GameReset({ gameState, onReset}) {
    if(gameState === GameState.gameRunning) {
        return;
    }
    return ( 
        <button className="reset-button" onClick={onReset}>Reset Game</button>
     );
}

export default GameReset;