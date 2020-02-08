
import React from 'react';

import styles from './Account.module.css';


import Header from '../../components/Header/Header';

import {Link} from 'react-router-dom';

class Account extends React.Component{


    render(){

        return (
            <div className={styles.account}>

                <Header />

                <div className={styles.container}>

                    <h2 className={styles.header}>Account</h2>

                    <div className={styles.innerContainer}>

                        <div className={styles.left}>
                            <p className={styles.text}>Welcome to your account</p>
                        </div>

                        <div className={styles.right}>

                            <Link to="/account" className={styles.right__link}>Account</Link>
                            <Link to="/orders" className={styles.right__link}>Order</Link>
                            <Link to="/changePassword" className={styles.right__link}>Change Password</Link>
                            <a href="/" className={styles.right__link}>Settings</a>

                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Account;