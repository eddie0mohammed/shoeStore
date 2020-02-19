
import React from 'react';

import styles from './Login.module.css';

import {Link, withRouter} from 'react-router-dom';

import {auth, signInWithGoogle} from '../../firebase/firebase';


class Login extends React.Component{

    state = {
        email: '',
        password: '',

        emailError: "Email not valid",
        passwordError: 'Password should be a min 6 characters'
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try{

            await auth.signInWithEmailAndPassword(this.state.email, this.state.password);
            this.setState({
                email: '',
                password: ''
            });

        }catch(error){
            console.log('error logging in', error.message);
        }

        this.props.history.push('/products');
        
    }

    render(){

        return (
            <div className={styles.login}>

                <div className={styles.container}>

                    <h2 className={styles.header}>Login</h2>

                    <div className={styles.innerContainer}>

                        <form className={styles.left} onSubmit={this.handleSubmit}>

                            <input type="email" className={styles.input} name="email" required placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
                            <input type="password" className={styles.input} name="password" required placeholder="Password" value={this.state.password} onChange={this.handleChange}/>

                            <a href="/" className={styles.link}>Forgot Password</a>

                            <button className={styles.btn}>Log In</button>

                        </form>

                        <p className={styles.border}>&nbsp;</p>

                        <div className={styles.right}>

                            <button className={styles.btnRight} onClick={signInWithGoogle}>Sign In With Google</button>
                            {/* <button className={styles.btnRight}>Facebook</button> */}
                            {/* <button className={styles.btnRight}>Twitter</button> */}

                        </div>

                    </div>

                    <p className={styles.other}>Need an account? <Link to='/register' className={styles.otherLink}>Sign Up</Link></p>
                </div>


            </div>
        )
    }
}

export default withRouter(Login);