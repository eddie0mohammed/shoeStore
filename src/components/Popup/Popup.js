
import React from 'react';

import styles from './Popup.module.css';



class Popup extends React.Component{


    render(){


        return (
            <div className={styles.popup} style={{transform: `${this.props.show ? 'translateY(0)' : 'translateY(100%)'}`, visibility: `${this.props.show ? 'visible' : 'hidden'}`}}>

                <div className={styles.label__container}>
                    <p className={styles.label}>My Cart</p>
                </div>

                <div className={styles.products__container}>

                    <div className={styles.inner__container}>
                        
                        <div className={styles.product}></div>

                        <div className={styles.bar}>
                            <div className={styles.icon}>x</div>
                        </div>

                    </div>

                    <div className={styles.inner__container}>
                        
                        <div className={styles.product}></div>

                        <div className={styles.bar}>
                            <div className={styles.icon}>x</div>
                        </div>

                    </div>

                    <div className={styles.inner__container}>
                        
                        <div className={styles.product}></div>

                        <div className={styles.bar}>
                            <div className={styles.icon}>x</div>
                        </div>

                    </div>

                    <div className={styles.inner__container}>
                        
                        <div className={styles.product}></div>

                        <div className={styles.bar}>
                            <div className={styles.icon}>x</div>
                        </div>

                    </div>


                </div>

                <div className={styles.number__container}>

                    <div className={styles.number__innerContainer}>
                        <p className={styles.header}>Total</p>
                        <p className={styles.exact}>X4</p>
                    </div>

                </div>

                <div className={styles.price__container}>
                    
                    <div className={styles.price__innerContainer}>
                        <p className={styles.header}>Total</p>
                        <p className={styles.exact}>$3000</p>
                    </div>

                </div>

                <div className={styles.checkout__container}>

                    <p className={styles.checkout__label}>Checkout</p>
                    <i className="fa fa-shopping-cart"></i>

                </div>

            </div>
        )
    }
}

export default Popup;