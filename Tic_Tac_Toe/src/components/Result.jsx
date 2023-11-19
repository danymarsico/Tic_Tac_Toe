import GameState from "./GameState";

function Result({ gameState }) {
    switch (gameState) {
        case GameState.gameRunning:
            return <></>;
        case GameState.Draw:
            return <div className="result"> It's a draw...</div>;
        case GameState.playerXWins:
            return <div className="result">Player X wins!</div>;
        case GameState.playerOWins:
            return <div className="result">Player O wins!</div>;
        default:
            return <></>;
    }
}

export default Result;