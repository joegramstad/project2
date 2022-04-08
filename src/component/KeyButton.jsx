import React from 'react';
import {useDispatch} from 'react-redux';
import './styles/KeyButton.css';

export default function KeyButton(props) {

    const dispatch = useDispatch();

    function onClick() {

        const action = {
            type: 'letterSelected',
            letter: displayLetter
        }

        dispatch(action);
    }

    const displayLetter = props.letter;


    return (
        <button className={'KeyBox'} onClick={onClick}> {displayLetter} </button>
    )
}