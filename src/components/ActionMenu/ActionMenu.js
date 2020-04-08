import React from 'react';

import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';
import Button from '../Button/Button';

class ActionMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMenuOpen: false
        }

        this.menuRef = React.createRef()

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.isMenuOpen) {
            this.setState({isMenuOpen: false});
            this.menuRef.current.state.isOpen = false;
        }
        else {
            this.setState({isMenuOpen: true});
            this.menuRef.current.state.isOpen = true;
        }
    }

    render() {
        return (
            <div>
                <Button
                    iconOnly
                    iconName='FiMoreHorizontal'
                    onClick={this.handleClick}
                ></Button>
                <Menu ref={this.menuRef}>
                    <MenuItem iconName='FiShare2' label='Share' />
                    <MenuItem iconName='FiEdit2' label='Edit' />
                    <MenuItem iconName='FiTrash2' label='Delete' />
                </Menu>
            </div>
        )
    }
}

export default ActionMenu;