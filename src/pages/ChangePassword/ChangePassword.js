
import React from 'react';

import styles from './ChangePassword.module.css';


// import Header from '../../components/Header/Header';

import {Link } from 'react-router-dom';


class ChangePassword extends React.Component{


    render(){

        return (
            <div className={styles.changePassword}>

                {/* <Header /> */}

                <div className={styles.container}>

                    <h2 className={styles.header}>Change Password</h2>

                    <div className={styles.innerContainer}>

                        <div className={styles.left}>
                            
                            <div className={styles.innerLeft}>
                                <p className={styles.label}>Current Password</p>
                                <input type="text" className={styles.input} placeholder="Current Password"/>

                                <button className={styles.save}>Save</button>
                            </div>

                            <div className={styles.innerRight}>
                                <p className={styles.label}>New Password</p>
                                <input type="text" className={styles.input} placeholder="New Password"/>



                            </div>
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

export default ChangePassword;