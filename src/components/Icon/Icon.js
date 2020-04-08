import React from 'react';

import * as ReactIcon from "react-icons/fi";

class Icon extends React.Component {
    render() {
        const {
            iconName
        } = this.props;

        return (
            React.createElement(ReactIcon[iconName])
        )
    }
}

export default Icon;