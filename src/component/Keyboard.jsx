import React from 'react';
import KeyButton from './KeyButton';
import EnterKey from './EnterKey';
import DeleteKey from './DeleteKey';
import './styles/Keyboard.css'

export default function Keyboard(props) {

    return (
        <div id={'Keyboard'}>
            <KeyButton letter={'Q'}/>
            <KeyButton letter={'W'}/>
            <KeyButton letter={'E'}/>
            <KeyButton letter={'R'}/>
            <KeyButton letter={'T'}/>
            <KeyButton letter={'Y'}/>
            <KeyButton letter={'U'}/>
            <KeyButton letter={'I'}/>
            <KeyButton letter={'O'}/>
            <KeyButton letter={'P'}/>
            <KeyButton letter={'A'}/>
            <KeyButton letter={'S'}/>
            <KeyButton letter={'D'}/>
            <KeyButton letter={'F'}/>
            <KeyButton letter={'G'}/>
            <KeyButton letter={'H'}/>
            <KeyButton letter={'J'}/>
            <KeyButton letter={'K'}/>
            <KeyButton letter={'L'}/>
            <EnterKey/>
            <KeyButton letter={'Z'}/>
            <KeyButton letter={'X'}/>
            <KeyButton letter={'C'}/>
            <KeyButton letter={'V'}/>
            <KeyButton letter={'B'}/>
            <KeyButton letter={'N'}/>
            <KeyButton letter={'M'}/>
            <DeleteKey/>
        </div>
    );
}