import { useState } from "react";
import Board from "./TTTBoard";

const PLAYER_X = 'X';
const PLAYER_O = 'O'

function TicTacToe() {
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState(PLAYER_X);

    const handleTileClick = (index) => {
        if (tiles[index] !== null) {
            return;
        }

        const newTiles = [...tiles];
        newTiles[index] = playerTurn;
        setTiles(newTiles);
        if(playerTurn === PLAYER_X) {
            setPlayerTurn(PLAYER_O);
        } else {
            setPlayerTurn(PLAYER_X);
        }
    }

    return (
        <div>
            <h1>Welcome to Re-Act-Toe!</h1>
            <Board tiles = {tiles} onTileClick={handleTileClick} />
        </div>
    );
}

export default TicTacToe;