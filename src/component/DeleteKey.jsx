import React from 'react';
import './styles/SpecialKey.css';
import {useDispatch} from "react-redux";

export default function DeleteKey(props) {

    const dispatch = useDispatch();

    function onClick() {

        const action = {
            type: 'deleteKey',
        }
        dispatch(action);
    }

    return (
        <button className={"SpecialBox"} onClick={onClick}> Delete </button>
    )
}