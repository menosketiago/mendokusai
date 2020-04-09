import React from 'react';
import ReactDOM from "react-dom";

import Button from '../Button/Button';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';
import Portal from '../Portal';

class ActionMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            btnClicked: false,
            isMenuOpen: false
        }

        this.btnRef = React.createRef();
        this.menuRef = React.createRef();

        this.positionX = 0;
        this.positionY = 0;
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
                this.positionMenu(btn, menu);
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

    positionMenu(btn, menu) {
        let btnRect, menuRect;

        btnRect= btn.getBoundingClientRect();
        menuRect= menu.getBoundingClientRect();

        this.positionY = btnRect.bottom;
        this.positionX = btnRect.left;
    }

    render() {
        const btnDemoStyles = {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
        }

        const menuPositionStyles = {
            left: `${this.positionX}px`,
            top: `${this.positionY}px`
        }

        console.log(menuPositionStyles);

        return (
            <div style={btnDemoStyles}>
                <Button
                    iconOnly
                    iconName='FiMoreHorizontal'
                    ref={this.btnRef}
                ></Button>
                <Portal>
                    <Menu styleProps={menuPositionStyles} ref={this.menuRef}>
                        <MenuItem iconName='FiShare2' label='Share' />
                        <MenuItem iconName='FiEdit2' label='Edit' />
                        <MenuItem iconName='FiTrash2' label='Delete' />
                    </Menu>
                </Portal>
            </div>
        )
    }
}

export default ActionMenu;