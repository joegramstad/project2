import React from 'react';
import classNames from 'classnames';
import Keyboard from './Keyboard';
import LetterBox from './LetterBox';
import RestartButton from "./RestartButton";
import {useDispatch} from 'react-redux';
import './styles/App.css';


export default function AppMedium(props) {
    const mediumWordContainer = classNames('WordContainer', 'Medium');

    const dispatch = useDispatch();

    const action = {
        type: 'newGame',
        diff: 'med'
    }

    dispatch(action);

    return (
        <div>
            <h1 id={'GameDiff'}> Current Difficulty: Medium</h1>
            <RestartButton diff={'med'}/>
            <div className={mediumWordContainer}>
                <LetterBox row={0} col={0} diff={'med'}/>
                <LetterBox row={0} col={1} diff={'med'}/>
                <LetterBox row={0} col={2} diff={'med'}/>
                <LetterBox row={0} col={3} diff={'med'}/>
                <LetterBox row={0} col={4} diff={'med'}/>
                <LetterBox row={0} col={5} diff={'med'}/>
                <LetterBox row={1} col={0} diff={'med'}/>
                <LetterBox row={1} col={1} diff={'med'}/>
                <LetterBox row={1} col={2} diff={'med'}/>
                <LetterBox row={1} col={3} diff={'med'}/>
                <LetterBox row={1} col={4} diff={'med'}/>
                <LetterBox row={1} col={5} diff={'med'}/>
                <LetterBox row={2} col={0} diff={'med'}/>
                <LetterBox row={2} col={1} diff={'med'}/>
                <LetterBox row={2} col={2} diff={'med'}/>
                <LetterBox row={2} col={3} diff={'med'}/>
                <LetterBox row={2} col={4} diff={'med'}/>
                <LetterBox row={2} col={5} diff={'med'}/>
                <LetterBox row={3} col={0} diff={'med'}/>
                <LetterBox row={3} col={1} diff={'med'}/>
                <LetterBox row={3} col={2} diff={'med'}/>
                <LetterBox row={3} col={3} diff={'med'}/>
                <LetterBox row={3} col={4} diff={'med'}/>
                <LetterBox row={3} col={5} diff={'med'}/>
                <LetterBox row={4} col={0} diff={'med'}/>
                <LetterBox row={4} col={1} diff={'med'}/>
                <LetterBox row={4} col={2} diff={'med'}/>
                <LetterBox row={4} col={3} diff={'med'}/>
                <LetterBox row={4} col={4} diff={'med'}/>
                <LetterBox row={4} col={5} diff={'med'}/>
                <LetterBox row={5} col={0} diff={'med'}/>
                <LetterBox row={5} col={1} diff={'med'}/>
                <LetterBox row={5} col={2} diff={'med'}/>
                <LetterBox row={5} col={3} diff={'med'}/>
                <LetterBox row={5} col={4} diff={'med'}/>
                <LetterBox row={5} col={5} diff={'med'}/>
            </div>
            <Keyboard/>
        </div>
    );
}