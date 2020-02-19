
import React from 'react';

import styles from './Register.module.css';


import {Link, withRouter} from 'react-router-dom';

import {auth, createUserProfileDocument} from '../../firebase/firebase';


class Register extends React.Component{


    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        if (this.state.email !== '' && this.state.password !== ''){

            try{

                const {user} = await auth.createUserWithEmailAndPassword(this.state.email, this.state.password);

                await createUserProfileDocument(user);

                this.setState({
                    email: '',
                    password: ''
                })

            }catch(error){

                console.log('error occured during registration', error.message);
            }
        }

        this.props.history.push('/products');
    }

    render(){

        return (
            <div className={styles.register}>

                <form className={styles.container} onSubmit={this.handleSubmit}>

                    <h2 className={styles.header}>Register</h2>

                    <div className={styles.innerContainer}>

                        <input className={styles.input} type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
                        <input className={styles.input} type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>

                        <button className={styles.btn}>Sign Up</button>
                        

                    </div>

                    <p className={styles.other}>Have an account? <Link to='/login' className={styles.otherLink}>Sign In</Link></p>
                </form>
            </div>
        )
    }
}

export default withRouter(Register);