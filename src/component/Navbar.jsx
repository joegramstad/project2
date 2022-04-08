import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

export default function Navbar() {
    return (
        <div>
            <div className='headerBox'>
                <h1> Wordle Game </h1>
            </div>
            <div className='navBar'>
                <Link to={'/'}>Home</Link>
                <Link to={'/game'}>Game</Link>
                <Link to={'/rules'}>Rules</Link>
            </div>
        </div>
    )
}