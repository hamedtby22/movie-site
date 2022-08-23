import React from 'react';
import PropTypes from 'prop-types';

import './CustomButton.scss';

const CustomButton = props => {
    return (
        <button
            className={`btn ${props.className}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </button>
    );
}

export const OutlineButton = props => {
    return (
        <CustomButton
            className={`btn-outline ${props.className}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </CustomButton>
    );
}

CustomButton.propTypes = {
    onClick: PropTypes.func
}

export default CustomButton;