
import React from 'react';

import styles from './Orders.module.css';


import Header from '../../components/Header/Header';

import {Link} from 'react-router-dom';


class Orders extends React.Component{


    render(){

        return (
            <div className={styles.orders}>

                <Header />

                <div className={styles.container}>

                    <h2 className={styles.header}>Orders</h2>

                    <div className={styles.innerContainer}>

                        <div className={styles.left}>
                            
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th className={styles.table__header}>ID</th>
                                        <th className={styles.table__header}>Price</th>
                                        <th className={styles.table__header}>Date</th>
                                        <th className={styles.table__header}>Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className={styles.table__content}>12345</td>
                                        <td className={styles.table__content}>$3200</td>
                                        <td className={styles.table__content}>02/02/2020</td>
                                        <td className={`${styles.table__content} ${styles.shipped}`}>Shipped</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.table__content}>12345</td>
                                        <td className={styles.table__content}>$3200</td>
                                        <td className={styles.table__content}>02/02/2020</td>
                                        <td className={`${styles.table__content} ${styles.shipped}`}>Shipped</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.table__content}>12345</td>
                                        <td className={styles.table__content}>$3200</td>
                                        <td className={styles.table__content}>02/02/2020</td>
                                        <td className={`${styles.table__content} ${styles.waiting}`}>Waiting</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.table__content}>12345</td>
                                        <td className={styles.table__content}>$3200</td>
                                        <td className={styles.table__content}>02/02/2020</td>
                                        <td className={`${styles.table__content} ${styles.cancelled}`}>Cancelled</td>
                                    </tr>                                    

                                </tbody>
                            </table>
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

export default Orders;