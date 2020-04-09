import React from 'react';

import styles from './Button.module.scss';
import Icon from '../Icon/Icon';

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick();
    }

    render() {
        const {
            iconOnly,
            iconName
        } = this.props;

        if (iconOnly) {
            return (
                <button
                    className={styles.Icon}
                    onClick={(this.handleClick)}
                >
                    <Icon iconName={iconName}></Icon>
                </button>
            )
        }
    }
}

export default Button;