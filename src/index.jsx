import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { addNote, modifyNote } from './actions.jsx';
import { todoApp } from './reducers.jsx';
import App from './components/App.jsx';

const store = createStore(todoApp);

const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    container
);
