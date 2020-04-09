import React from 'react';
import ReactDOM from "react-dom";

import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';
import Button from '../Button/Button';

class ActionMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            btnClicked: false,
            isMenuOpen: false
        }

        this.btnRef = React.createRef();
        this.menuRef = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('click', (e) => this.handleAllClicks(e));
    }

    componentWillUnmount() {
        document.removeEventListener('click', () => this.handleAllClicks());
    }

    handleAllClicks(e) {
        // Get the actual DOM node for element comparission
        const btn = ReactDOM.findDOMNode(this.btnRef.current);
        const menu = ReactDOM.findDOMNode(this.menuRef.current);

        if (btn) {
            /*
            If the btn click is the first set the state so that the next
            click on the btn element closes the menu
            */
            if (btn === e.target && !this.state.btnClicked) {
                this.openMenu();

                this.setState({btnClicked: true});
            }
            else {
                this.closeMenu();

                btn.blur();
                this.setState({btnClicked: false});
            }
        }

        // Close the menu if clicking inside it
        if (menu && menu.contains(e.target)) this.closeMenu();

        // Close the menu on clicks outside the menu element
        if (menu && !menu.contains(e.target)) this.closeMenu();
    }

    openMenu() {
        this.setState({isMenuOpen: true});
        this.menuRef.current.state.isOpen = true;
    }

    closeMenu() {
        this.setState({isMenuOpen: false});
        this.menuRef.current.state.isOpen = false;
    }

    render() {
        return (
            <React.Fragment>
                <Button
                    iconOnly
                    iconName='FiMoreHorizontal'
                    ref={this.btnRef}
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