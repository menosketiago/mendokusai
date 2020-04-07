import React from 'react';

import styles from './Separator.module.scss';

class Separator extends React.Component {
    render() {
        return (
            <hr className={styles.Separator} />
        )
    }
}

export default Separator;