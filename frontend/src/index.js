import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App/App';
import Login from './pages/Login';


import ReactDOM from 'react-dom';
import TelegramLoginButton from 'react-telegram-login';

const handleTelegramResponse = response => {
    console.log(response);
};

ReactDOM.render(
    <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="UNOgBot" />,
    document.getElementById('telegramButton')
);

render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
