import React from 'react';
import styles from './Menu.module.scss';

import Icon from '../Icon/Icon';

class MenuItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('Item clicked');
    }

    render() {
        const {
            iconName,
            label
        } = this.props;

        return (
            <li className={styles.Item} onClick={this.handleClick}>
                <Icon iconName={iconName} />
                {label}
            </li>
        )
    }
}

export default MenuItem;