
import React from 'react';

import styles from './Login.module.css';

// import Header from '../../components/Header/Header';

import {Link} from 'react-router-dom';


class Login extends React.Component{

    render(){

        return (
            <div className={styles.login}>

                {/* <Header /> */}

                <div className={styles.container}>

                    <h2 className={styles.header}>Login</h2>

                    <div className={styles.innerContainer}>

                        <div className={styles.left}>

                            <input type="email" className={styles.input} name="email" required placeholder="Email"/>
                            <input type="password" className={styles.input} name="email" required placeholder="Password"/>

                            <a href="/" className={styles.link}>Forgot Password</a>

                            <button className={styles.btn}>Log In</button>

                        </div>

                        <p className={styles.border}>&nbsp;</p>

                        <div className={styles.right}>

                            <button className={styles.btnRight}>Google</button>
                            <button className={styles.btnRight}>Facebook</button>
                            <button className={styles.btnRight}>Twitter</button>

                        </div>

                    </div>

                    <p className={styles.other}>Need an account? <Link to='/register' className={styles.otherLink}>Sign Up</Link></p>
                </div>


            </div>
        )
    }
}

export default Login;