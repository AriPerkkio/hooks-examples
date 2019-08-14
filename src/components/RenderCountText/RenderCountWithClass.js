import React, { Component } from 'react';

import RenderCountText from './RenderCountText';

class RenderCountWithClass extends Component {
    onClick = () => alert(this.props.text);

    render() {
        return <RenderCountText onClick={this.onClick} text='class' />;
    }
}

export default RenderCountWithClass;
