import React from 'react';
import './styles/Rules.css';

export default function Rules(props) {

    return (
        <div>
            <ul id={'ContentBox'}>
                <h1> Game Rules: </h1>
                <li>Every word you enter must be in the word list</li>
                <li>A correct letter turns green</li>
                <li>A correct letter in the wrong place turns yellow</li>
                <li>An incorrect letter turns gray</li>
                <li>Letters can be used more than once</li>
                <li>This game offers three difficulty levels:</li>
                <table>
                    <tr>
                        <th> Difficulty </th>
                        <th> Letters in Word </th>
                        <th> Guess Attempts </th>
                    </tr>
                    <tr>
                        <td> Easy </td>
                        <td> 5 </td>
                        <td> 7 </td>
                    </tr>
                    <tr>
                        <td> Medium </td>
                        <td> 6 </td>
                        <td> 6 </td>
                    </tr>
                    <tr>
                        <td> Hard </td>
                        <td> 7 </td>
                        <td> 5 </td>
                    </tr>
                </table>
            </ul>
        </div>
    )
}