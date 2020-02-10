import React from 'react';

import styles from './Header.module.css';

import {Link} from 'react-router-dom';


class Header extends React.Component{


    render(){


        return (
            <div className={styles.header}>

                <Link to='/' className={styles.header__logo}>Freshgear</Link>

                <div className={styles.header__links}>
                    <Link to="/about" className={styles.header__link}>About</Link>
                    <Link to="/new" className={styles.header__link}>New Arrival</Link>
                    <Link to='/products' className={styles.header__link}>Categories</Link>
                    
                    <Link to='/login' className={styles.header__link}>Login</Link>
                    <Link to='/register' className={styles.header__link}>Register</Link>
                    <Link to='/account' className={styles.header__link}>Settings</Link>

                    <div className={`${styles.header__link} ${styles.cart}`} onClick={this.props.toggle}>Cart <span className={styles.number}>4</span></div>
                </div>
            </div>
        )
    }
}

export default Header;