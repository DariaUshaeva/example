import React from 'react';
import './Input.scss';

class Input extends React.Component {
    render () {
        return (
            <div className={this.props.className}>
                <label for={this.props.id}>{this.props.label}</label>
                <input id={this.props.id} type="text" value="" placeholder={this.props.placeholder}/>
            </div>
        );
    }
}
export default Input;