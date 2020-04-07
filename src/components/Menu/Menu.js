import React from 'react';

import styles from './Menu.module.scss';

class Menu extends React.Component {
    constructor() {
        super();

        this.state = {
            isVisible: false
        }
    }

    render() {
        return (
            <ul className={styles.Menu}>
                {this.props.children}
            </ul>
        )
    }
}

export default Menu;