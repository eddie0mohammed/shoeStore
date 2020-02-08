
import React from 'react';

import styles from './TopSection.module.css';


class TopSection extends React.Component{


    render(){

        return (
            <div className={styles.topSection}>

                <div className={styles.circle}>
                    
                    <div className={styles.img}></div>

                </div>


                <div className={styles.textContainer}>
                    <p className={styles.name}>Yeezy</p>
                    <p className={styles.model}>Boost 350</p>
                </div>

            </div>
        )
    }
}

export default TopSection;