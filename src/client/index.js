import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {App} from './App';
import rootReducer from './state-management/reducers';
// setup fake backend
import { configureFakeBackend } from '../client/_helpers';
configureFakeBackend();
import 'bootstrap/dist/css/bootstrap.min.css';

import './app.css';
import  './styles.scss';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
