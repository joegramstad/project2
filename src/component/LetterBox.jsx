import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import './styles/LetterBox.css';

export default function LetterBox(props) {

    let guessed;
    let color;

    function getLetterFromState(state) {
        if (props.row === state.curRow) {
            return state.guess.slice(props.col, props.col + 1);
        } else if(props.row < state.curRow) {
            return state.prevGuesses[props.row].slice(props.col, props.col + 1);
        }
        return '';
    }

    function getColorFromState(state) {
        if (props.row < state.curRow) {
            return state.prevColors[props.row][props.col];
        }
        return 'Default';
    }

    guessed = useSelector(getLetterFromState, shallowEqual);
    color = useSelector(getColorFromState, shallowEqual);

    const displayClass = 'LetterBox ' + color;

    return (
        <div className={displayClass}>  {guessed} </div>
    )
}