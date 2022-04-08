import React from 'react';
import './styles/RestartButton.css';
import {useDispatch} from "react-redux";

export default function RestartButton(props) {

    const dispatch = useDispatch();

    function onClick() {

        const action = {
            type: 'newGame',
            diff: props.diff
        }
        dispatch(action);
    }

    return (
        <div className={"Container"}>
            <button className={"RestartButton"} onClick={onClick}> Restart Game </button>
        </div>
    )
}