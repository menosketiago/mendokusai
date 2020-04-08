import React from 'react';

import styles from './Menu.module.scss';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        const {
            openState
        } = this.props;

        this.state = {
            isOpen: openState || false
        }
    }

    render() {
        return (
            <ul className={
                this.state.isOpen ?
                `${styles.Menu} ${styles.isOpen}` :
                styles.Menu
            }>
                {this.props.children}
            </ul>
        )
    }
}

export default Menu;