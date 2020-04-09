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
        const {
            styleProps
        } = this.props;

        return (
            <ul className={
                    this.state.isOpen ?
                    `${styles.Menu} ${styles.isOpen}` :
                    styles.Menu
                }
                style={styleProps}
            >
                {this.props.children}
            </ul>
        )
    }
}

export default Menu;