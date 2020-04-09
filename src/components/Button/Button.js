import React from 'react';

import styles from './Button.module.scss';
import Icon from '../Icon/Icon';

class Button extends React.Component {
    render() {
        const {
            iconOnly,
            iconName
        } = this.props;

        if (iconOnly) {
            return (
                <button className={styles.Icon}>
                    <Icon iconName={iconName}></Icon>
                </button>
            )
        }
    }
}

export default Button;