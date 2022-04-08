import React from 'react';
import {useDispatch} from "react-redux";
import './styles/SpecialKey.css';

export default function EnterKey(props) {

    const dispatch = useDispatch();

    function onClick() {

        const action = {
            type: 'enterKey',
        }
        dispatch(action);
    }

    return (
        <button className={"SpecialBox"} onClick={onClick}> Enter </button>
    )
}