import React, { Component } from 'react';

import Stringify from 'components/Stringify';
import Button from 'components/common/Button';

class ButtonGroupWithComponents extends Component {
    state = { left: false, right: false };

    onLeftClick = () => this.setState(({ left }) => ({ left: !left }));
    onRight = () => this.setState(({ right }) => ({ right: !right }));

    render() {
        return (
            <>
                <Button onClick={this.onLeftClick}>Left</Button>
                <Button onClick={this.onRight}>Right</Button>

                <Stringify>{this.state}</Stringify>
            </>
        );
    }
}

export default ButtonGroupWithComponents;
