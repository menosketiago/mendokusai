import React from 'react';
import ReactDOM from "react-dom";

import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';
import Button from '../Button/Button';

class ActionMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMenuOpen: false
        }

        this.handleClick = this.handleClick.bind(this);

        this.btnRef = React.createRef();
        this.menuRef = React.createRef();
    }

    handleClick() {
        this.state.isMenuOpen ? this.closeMenu() : this.openMenu();
    }

    handleFurtherClicks(e) {
        // Get the actual DOM nodes for element comparission
        const btnElement = ReactDOM.findDOMNode(this.btnRef.current);
        const menuElement = ReactDOM.findDOMNode(this.menuRef.current);

        // Clicks outside of the btn and menu should trigger close
        if (!btnElement.contains(e.target) && !menuElement.contains(e.target)) {
            this.closeMenu();
        }

        // Clicks inside
        if (menuElement.contains(e.target)) this.closeMenu();
    }

    openMenu() {
        this.setState({isMenuOpen: true});
        this.menuRef.current.state.isOpen = true;

        // Listen to clicks outside of the menu wrapper
        document.addEventListener('click', (e) => this.handleFurtherClicks(e));
    }

    closeMenu() {
        this.setState({isMenuOpen: false});
        this.menuRef.current.state.isOpen = false;

        // Remove the listener on menu close
        document.removeEventListener('click', () => this.handleFurtherClicks());
    }

    render() {
        return (
            <React.Fragment>
                <Button
                    iconOnly
                    iconName='FiMoreHorizontal'
                    ref={this.btnRef}
                    onClick={this.handleClick}
                ></Button>
                <Menu ref={this.menuRef}>
                    <MenuItem iconName='FiShare2' label='Share' />
                    <MenuItem iconName='FiEdit2' label='Edit' />
                    <MenuItem iconName='FiTrash2' label='Delete' />
                </Menu>
            </React.Fragment>
        )
    }
}

export default ActionMenu;