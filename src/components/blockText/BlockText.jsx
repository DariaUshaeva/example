import React from 'react';
import './BlockText.scss';

class BlockText extends React.Component {
    render () {
        return (
            <div className={this.props.className} id={this.props.id}>
                {this.props.text}
            </div>
        );
    }
}

export default BlockText;