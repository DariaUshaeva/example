import React from 'react';
import './Button.scss';

class Button extends React.Component {
    render () {
        return (
            <input className={this.props.className} id={this.props.id} type="button" value={this.props.value}/>
        );
    }
}

export default Button;