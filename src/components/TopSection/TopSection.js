
import React from 'react';

import styles from './TopSection.module.css';

import {withRouter} from 'react-router-dom';


class TopSection extends React.Component{



    handleClick = () => {
        this.props.history.push('/products');
    }

    render(){

        return (
            <div className={styles.topSection}>

                <div className={styles.circle}>
                    
                    <div className={styles.img} onClick={this.handleClick}></div>

                </div>


                <div className={styles.textContainer}>
                    <p className={styles.name}>Yeezy</p>
                    <p className={styles.model}>Boost 350</p>
                </div>

            </div>
        )
    }
}

export default withRouter(TopSection);