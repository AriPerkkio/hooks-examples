import React, { useReducer } from 'react';
import classNames from 'classnames';

const Button = ({ className, onClick, ...props }) => {
    const [toggled, toggle] = useReducer(t => !t, false);
    const _onClick = (...args) => {
        toggle();
        onClick && onClick(...args);
    };

    return (
        <button
            {...props}
            className={classNames('common-button', toggled && 'toggled')}
            onClick={_onClick}>
            {props.children}
        </button>
    );
};

export default Button;
