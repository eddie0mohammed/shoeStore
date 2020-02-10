import React from 'react';

import styles from './Backdrop.module.css';


class Backdrop extends React.Component{


    render(){

        return (
            <div className={styles.backdrop} style={{display: `${this.props.show? 'block' : 'none'}`}} onClick={this.props.toggle}>

            </div>
        )
    }
}

export default Backdrop;