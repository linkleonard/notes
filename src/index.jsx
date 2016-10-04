import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { addNote, modifyNote } from './actions.jsx';
import reducer from './reducers.jsx';
import App from './components/App.jsx';

const devTools = window.devToolsExtension && window.devToolsExtension();
const store = createStore(reducer, devTools);

const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    container
);
