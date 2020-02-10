
import React from 'react';

import styles from './Register.module.css';

// import Header from '../../components/Header/Header';

import {Link} from 'react-router-dom';


class Register extends React.Component{


    render(){

        return (
            <div className={styles.register}>

                {/* <Header /> */}

                <div className={styles.container}>

                    <h2 className={styles.header}>Register</h2>

                    <div className={styles.innerContainer}>

                        <input className={styles.input} type="text" name="email" placeholder="Email"/>
                        <input className={styles.input} type="password" name="password" placeholder="Password"/>

                        <button className={styles.btn}>Sign Up</button>
                        

                    </div>

                    <p className={styles.other}>Have an account? <Link to='/login' className={styles.otherLink}>Sign In</Link></p>
                </div>
            </div>
        )
    }
}

export default Register;