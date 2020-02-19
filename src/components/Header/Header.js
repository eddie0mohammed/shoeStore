import React from 'react';

import styles from './Header.module.css';

import {Link} from 'react-router-dom';

import {auth} from '../../firebase/firebase';

import {withRouter} from 'react-router-dom';

class Header extends React.Component{


    signOut = () => {
        auth.signOut();
        this.props.history.push('/');
    }
    
    render(){


        return (
            <div className={styles.header}>

                <Link to='/' className={styles.header__logo}>Freshgear</Link>

                <div className={styles.header__links}>
                    <Link to="/about" className={styles.header__link}>About</Link>
                    <Link to="/new" className={styles.header__link}>New Arrivals</Link>
                    <Link to='/products' className={styles.header__link}>Categories</Link>
                    
                    <Link to='/login' className={styles.header__link} style={{display: `${this.props.currentUser ? 'none' : 'block'}`}}>Login</Link>
                    <Link to='/register' className={styles.header__link } style={{display: `${this.props.currentUser ? 'none' : 'block'}`}}>Register</Link>
                    <div className={styles.header__link} onClick={this.signOut}>{this.props.currentUser ? 'Sign Out' : ''}</div>

                    {/* <Link to='/account' className={styles.header__link}>Settings</Link> */}

                    <div className={`${styles.header__link} ${styles.cart}`} style={{display: `${this.props.currentUser ? 'block' : 'none'}`}} onClick={this.props.toggle}>Cart <span className={styles.number}>{this.props.itemsNumber}</span></div>

                </div>

                <div className={styles.hamburger} onClick={this.props.toggleSidemenu}> {this.props.showSidemenu ? 'x' : '='}</div>

            </div>
        )
    }
}

export default withRouter(Header);