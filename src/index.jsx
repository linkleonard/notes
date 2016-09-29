import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.render = () => {
            return <div>Content!!</div>;
        }
    }
}


const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render(<App />, container);
