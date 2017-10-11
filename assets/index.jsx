import AwesomeComponent from './AwesomeComponent.jsx';
import AwesomeTime from './AwesomeTime.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render () {
        return (
            <div>
                <p>Hello React!</p>
                <AwesomeComponent />
                <AwesomeTime />
            </div>
       );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
