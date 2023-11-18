import { useState } from "react";
import Board from "./TTTBoard";

function TicTacToe() {
    const [tiles, setTiles] = useState(Array(9).fill(null));
    return (
        <div>
            <h1>Welcome to Re-Act-Toe!</h1>
            <Board tiles = {tiles} />
        </div>
    );
}

export default TicTacToe;