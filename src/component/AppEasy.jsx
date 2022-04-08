import React from 'react';
import classNames from 'classnames';
import Keyboard from './Keyboard';
import LetterBox from './LetterBox';
import RestartButton from "./RestartButton";
import {useDispatch} from 'react-redux';
import './styles/App.css';


export default function AppEasy(props) {
    const easyWordContainer = classNames('WordContainer', 'Easy');

    const dispatch = useDispatch();

    const action = {
        type: 'newGame',
        diff: 'easy'
    }

    dispatch(action);

    return (
        <div>
            <h1 id={'GameDiff'}>Difficulty: Easy</h1>
            <RestartButton diff={'easy'}/>
            <div className={easyWordContainer}>
                <LetterBox row={0} col={0} diff={'easy'}/>
                <LetterBox row={0} col={1} diff={'easy'}/>
                <LetterBox row={0} col={2} diff={'easy'}/>
                <LetterBox row={0} col={3} diff={'easy'}/>
                <LetterBox row={0} col={4} diff={'easy'}/>
                <LetterBox row={1} col={0} diff={'easy'}/>
                <LetterBox row={1} col={1} diff={'easy'}/>
                <LetterBox row={1} col={2} diff={'easy'}/>
                <LetterBox row={1} col={3} diff={'easy'}/>
                <LetterBox row={1} col={4} diff={'easy'}/>
                <LetterBox row={2} col={0} diff={'easy'}/>
                <LetterBox row={2} col={1} diff={'easy'}/>
                <LetterBox row={2} col={2} diff={'easy'}/>
                <LetterBox row={2} col={3} diff={'easy'}/>
                <LetterBox row={2} col={4} diff={'easy'}/>
                <LetterBox row={3} col={0} diff={'easy'}/>
                <LetterBox row={3} col={1} diff={'easy'}/>
                <LetterBox row={3} col={2} diff={'easy'}/>
                <LetterBox row={3} col={3} diff={'easy'}/>
                <LetterBox row={3} col={4} diff={'easy'}/>
                <LetterBox row={4} col={0} diff={'easy'}/>
                <LetterBox row={4} col={1} diff={'easy'}/>
                <LetterBox row={4} col={2} diff={'easy'}/>
                <LetterBox row={4} col={3} diff={'easy'}/>
                <LetterBox row={4} col={4} diff={'easy'}/>
                <LetterBox row={5} col={0} diff={'easy'}/>
                <LetterBox row={5} col={1} diff={'easy'}/>
                <LetterBox row={5} col={2} diff={'easy'}/>
                <LetterBox row={5} col={3} diff={'easy'}/>
                <LetterBox row={5} col={4} diff={'easy'}/>
                <LetterBox row={6} col={0} diff={'easy'}/>
                <LetterBox row={6} col={1} diff={'easy'}/>
                <LetterBox row={6} col={2} diff={'easy'}/>
                <LetterBox row={6} col={3} diff={'easy'}/>
                <LetterBox row={6} col={4} diff={'easy'}/>
            </div>
            <Keyboard/>
        </div>
    );
}