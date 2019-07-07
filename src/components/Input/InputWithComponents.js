import React, { Component } from 'react';

import Stringify from 'components/Stringify';

class InputWithComponent extends Component {
    state = { value: 'Initial Value' };

    onChange = ({ target: { value } }) => this.setState({ value });

    render() {
        return (
            <>
                <input
                    type='text'
                    value={this.state.value}
                    onChange={this.onChange}
                />
                <Stringify>{this.state}</Stringify>
            </>
        );
    }
}

export default InputWithComponent;
