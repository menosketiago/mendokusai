import React from 'react';

import styles from './Menu.module.scss';
import Icon from '../Icon/Icon';

class MenuItem extends React.Component {
    render() {
        const {
            iconName,
            label
        } = this.props;

        return (
            <li className={styles.Item}>
                <Icon iconName={iconName} />
                {label}
            </li>
        )
    }
}

export default MenuItem;