import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Game.css';

export default function Game() {
    return (
        <div>
            <ul id={"BorderBox"}>
                <h1> Select Difficulty: </h1>
                <li>
                    <Link className="link" to={"/game/easy"}>Easy</Link>
                    <ul>
                        <li> Letters in Word: 5 </li>
                        <li> Number of Guesses: 7 </li>
                    </ul>
                </li>
                <li>
                    <Link className="link" to={"/game/medium"}>Medium</Link>
                    <ul>
                        <li> Letters in Word: 6 </li>
                        <li> Number of Guesses: 6 </li>
                    </ul>
                </li>
                <li>
                    <Link className="link" to={"/game/hard"}>Hard</Link>
                    <ul>
                        <li> Letters in Word: 7 </li>
                        <li> Number of Guesses: 5 </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}