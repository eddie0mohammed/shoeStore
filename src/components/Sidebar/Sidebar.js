import React from 'react';

import styles from './Sidebar.module.css';

import {Link} from 'react-router-dom';


class Sidebar extends React.Component{

    render(){

        return (
            <div className={styles.sidebar} style={{transform: `${this.props.show ? 'translateX(0)' : 'translateX(100%)'}`}}>

                    <div className={styles.links__container}>
                        
                        <Link to="/about" className={styles.sidebar__link}>About</Link>
                        <Link to="/new" className={styles.sidebar__link}>New Arrivals</Link>
                        <Link to='/products' className={styles.sidebar__link}>Categories</Link>
                        
                        <Link to='/login' className={styles.sidebar__link}>Login</Link>
                        <Link to='/register' className={styles.sidebar__link}>Register</Link>
                        {/* <Link to='/account' className={styles.sidebar__link}>Settings</Link> */}

                    </div>

            </div>
        )
    }
}


export default Sidebar;