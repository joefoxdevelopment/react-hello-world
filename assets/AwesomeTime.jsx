import React from 'react';

class AwesomeTime extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000        
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        return (
            <div>
                Time: <span>{this.state.date.toLocaleTimeString()}</span>
            </div>        
        );
    }
}

export default AwesomeTime;
