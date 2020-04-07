import React from 'react';
import styles from './Menu.module.scss';

import MenuItem from './MenuItem';

class Menu extends React.Component {
    constructor() {
        super();

        this.state = {
            isVisible: false
        }
    }

    render() {
        return (
            <ul className={ styles.Menu }>
                <MenuItem label='Share' />
                <MenuItem label='Edit' />
                <MenuItem label='Delete' />
            </ul>
        )
    }
}

export default Menu;