import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createStore } from 'redux';
import Navbar from './component/Navbar';
import Rules from './component/Rules';
import Home from './component/Home';
import Game from './component/Game';
import AppEasy from "./component/AppEasy";
import AppMedium from "./component/AppMedium";
import AppHard from "./component/AppHard";
import { letterReducer } from './reducer/letterReducer';

const store = createStore(letterReducer);

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/game" element={<Game/>}/>
            <Route path="/game/easy" element={<AppEasy/>}/>
            <Route path="/game/medium" element={<AppMedium/>}/>
            <Route path="/game/hard" element={<AppHard/>}/>
            <Route path="/rules" element={<Rules/>}/>
        </Routes>
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

