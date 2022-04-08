import React from 'react';
import classNames from 'classnames';
import Keyboard from './Keyboard';
import LetterBox from './LetterBox';
import RestartButton from "./RestartButton";
import {useDispatch} from 'react-redux';
import './styles/App.css';


export default function AppHard(props) {
    const hardWordContainer = classNames('WordContainer', 'Hard');

    const dispatch = useDispatch();

    const action = {
        type: 'newGame',
        diff: 'hard'
    }

    dispatch(action);

    return (
        <div>
            <h1 id={'GameDiff'}>Difficulty: Hard</h1>
            <RestartButton diff={'hard'}/>
            <div className={hardWordContainer}>
                <LetterBox row={0} col={0} diff={'hard'}/>
                <LetterBox row={0} col={1} diff={'hard'}/>
                <LetterBox row={0} col={2} diff={'hard'}/>
                <LetterBox row={0} col={3} diff={'hard'}/>
                <LetterBox row={0} col={4} diff={'hard'}/>
                <LetterBox row={0} col={5} diff={'hard'}/>
                <LetterBox row={0} col={6} diff={'hard'}/>
                <LetterBox row={1} col={0} diff={'hard'}/>
                <LetterBox row={1} col={1} diff={'hard'}/>
                <LetterBox row={1} col={2} diff={'hard'}/>
                <LetterBox row={1} col={3} diff={'hard'}/>
                <LetterBox row={1} col={4} diff={'hard'}/>
                <LetterBox row={1} col={5} diff={'hard'}/>
                <LetterBox row={1} col={6} diff={'hard'}/>
                <LetterBox row={2} col={0} diff={'hard'}/>
                <LetterBox row={2} col={1} diff={'hard'}/>
                <LetterBox row={2} col={2} diff={'hard'}/>
                <LetterBox row={2} col={3} diff={'hard'}/>
                <LetterBox row={2} col={4} diff={'hard'}/>
                <LetterBox row={2} col={5} diff={'hard'}/>
                <LetterBox row={2} col={6} diff={'hard'}/>
                <LetterBox row={3} col={0} diff={'hard'}/>
                <LetterBox row={3} col={1} diff={'hard'}/>
                <LetterBox row={3} col={2} diff={'hard'}/>
                <LetterBox row={3} col={3} diff={'hard'}/>
                <LetterBox row={3} col={4} diff={'hard'}/>
                <LetterBox row={3} col={5} diff={'hard'}/>
                <LetterBox row={3} col={6} diff={'hard'}/>
                <LetterBox row={4} col={0} diff={'hard'}/>
                <LetterBox row={4} col={1} diff={'hard'}/>
                <LetterBox row={4} col={2} diff={'hard'}/>
                <LetterBox row={4} col={3} diff={'hard'}/>
                <LetterBox row={4} col={4} diff={'hard'}/>
                <LetterBox row={4} col={5} diff={'hard'}/>
                <LetterBox row={4} col={6} diff={'hard'}/>
            </div>
            <Keyboard/>
        </div>
    );
}