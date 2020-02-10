import React from 'react';
import './Logo.scss';
import logo from './111.png'

class Logo extends React.Component {
    render () {
        return (
            <div className={this.props.className}>
                <img id={this.props.id} src={logo} alt="" width="100"/>
            </div>           
        );
    }
}

export default Logo;