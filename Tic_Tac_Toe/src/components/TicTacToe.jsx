import { useState, useEffect } from "react";
import Board from "./TTTBoard";
import Result from "./Result";
import GameState from "./GameState";

const PLAYER_X = 'X';
const PLAYER_O = 'O'

const winningStrikes = [
    //Strikes for Rows
    {combo: [0,1,2], lineClass: 'line-row-1'},
    {combo: [3,4,5], lineClass: 'line-row-2'},
    {combo: [6,7,8], lineClass: 'line-row-3'},
    //Strikes for Columns
    {combo: [0,3,6], lineClass: 'line-column-1'},
    {combo: [1,4,7], lineClass: 'line-column-2'},
    {combo: [2,5,8], lineClass: 'line-column-3'},
    //Diagonals Strikes
    {combo: [0,4,8], lineClass: 'line-diagonal-1'},
    {combo: [2,4,6], lineClass: 'line-diagonal-2'},
];

function checkWinner(tiles, setLineClass, setGameState) {
    for(const {combo, lineClass} of winningStrikes) {
       const tileValue1 = tiles[combo[0]]
       const tileValue2 = tiles[combo[1]]
       const tileValue3 = tiles[combo[2]]

       if(tileValue1 !== null && tileValue1 === tileValue2 && tileValue3 === tileValue2) {
        setLineClass(lineClass);
        if(tileValue1 === PLAYER_X){
            setGameState(GameState.playerXWins);
        }
        else {
            setGameState(GameState.playerOWins);
        }
        return;
       }
    }

    const areAllMovesDone = tiles.every((tile) => tile !== null);
    if(areAllMovesDone) {
        setGameState(GameState.Draw);
    }
}

function TicTacToe() {
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
    const [lineClass, setLineClass] = useState();
    const [gameState, setGameState] = useState(GameState.gameRunning);

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
    };

    useEffect(() => {
        checkWinner(tiles, setLineClass, setGameState);
    }, [tiles])

    return (
        <div>
            <h1>Welcome to Re-Act-Toe!</h1>
            <Board playerTurn = {playerTurn}
            tiles = {tiles}
            onTileClick = {handleTileClick}
            lineClass = {lineClass}
            />
            <Result gameState = {gameState}/>
        </div>
    );
}

export default TicTacToe;