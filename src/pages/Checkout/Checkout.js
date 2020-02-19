
import React from 'react';

import styles from './Checkout.module.css';

import {Redirect } from 'react-router-dom';

class Checkout extends React.Component{


    renderItems = () => {
        return this.props.cartItems.map((elem, i) => {
            return (
                <div key={i} className={styles.itemContainer}>
                    <p className={styles.details}># {elem.productName} - {elem.gender}</p>
                    <p className={styles.details}>size: {elem.size}</p>
                    <p className={styles.details}>Price: ${parseInt(elem.price).toFixed(2)}</p>
                    <p className={styles.border}>&nbsp;</p>
                </div>
            )
        })
    }

    calculateTotal = () => {
        return this.props.cartItems.reduce((acc, elem) => {
            return acc + parseInt(elem.price)
        }, 0);
    }

    render(){

        const total = this.calculateTotal();
        const tax = 0.2 * total;
        const totalAfterTax = total + tax + 30;
         

        return this.props.currentUser ? 

        (
            <div className={styles.checkout}>
                
                <div className={styles.checkout__container}>


                    <h2 className={styles.header}>Checkout</h2>
                    
                    <p className={styles.border}>&nbsp;</p>


                    <div className={styles.inner__container}>

                        <div className={styles.left}>

                            <div className={styles.shipping__container}>

                                <h4 className={styles.heading}>Shipping Information</h4>

                                <div className={styles.row}>
                                    <div className={styles.col}>
                                        <p className={styles.label}>First Name</p>
                                        <input type="text" className={styles.input} name="firstName" />
                                    </div>
                                    <div className={styles.col}>
                                        <p className={styles.label}>Last Name</p>
                                        <input type="text" className={styles.input} name="lastName" />
                                    </div>
                                </div>

                                <div className={styles.row}>
                                    <div className={styles.col}>
                                        <p className={styles.label}>Address #1</p>
                                        <input type="text" className={styles.input} name="address1" />
                                    </div>
                                    <div className={styles.col}>
                                        <p className={styles.label}>Address #2</p>
                                        <input type="text" className={styles.input} name="address2" />
                                    </div>
                                </div>

                                <div className={styles.row}>
                                    <div className={styles.col}>
                                        <p className={styles.label}>City</p>
                                        <input type="text" className={styles.input} name="city" />
                                    </div>
                                    <div className={styles.col}>
                                        <p className={styles.label}>Zipcode</p>
                                        <input type="text" className={styles.input} name="zipcode" />
                                    </div>
                                </div>

                                <div className={styles.row}>
                                    <div className={styles.col}>
                                        <p className={styles.label}>Country</p>
                                        <input type="text" className={styles.input} name="country" />
                                    </div>
                                    
                                </div>

                            </div>

                            <div className={styles.biling__container}>

                                <h4 className={styles.heading}>Biling Information</h4>

                                <div className={styles.row}>
                                    <div className={styles.col}>
                                        <p className={styles.label}>First Name</p>
                                        <input type="text" className={styles.input} name="biling_firstName" />
                                    </div>
                                    <div className={styles.col}>
                                        <p className={styles.label}>Last Name</p>
                                        <input type="text" className={styles.input} name="biling_lastName" />
                                    </div>
                                </div>

                                <div className={styles.row}>
                                    <div className={styles.col}>
                                        <p className={styles.label}>Address #1</p>
                                        <input type="text" className={styles.input} name="biling_address1" />
                                    </div>
                                    <div className={styles.col}>
                                        <p className={styles.label}>Address #2</p>
                                        <input type="text" className={styles.input} name="biling_address2" />
                                    </div>
                                </div>

                                <div className={styles.row}>
                                    <div className={styles.col}>
                                        <p className={styles.label}>City</p>
                                        <input type="text" className={styles.input} name="biling_city" />
                                    </div>
                                    <div className={styles.col}>
                                        <p className={styles.label}>Zipcode</p>
                                        <input type="text" className={styles.input} name="biling_zipcode" />
                                    </div>
                                </div>

                                <div className={styles.row}>
                                    <div className={styles.col}>
                                        <p className={styles.label}>Country</p>
                                        <input type="text" className={styles.input} name="biling_country" />
                                    </div>
                                    
                                </div>

                            </div>
                    
                        </div>

                        <div className={styles.right}>

                            <div className={styles.order__container}>

                                <h4 className={styles.order__heading}>Order</h4>

                                <div className={styles.items__container}>
                                    <p className={styles.order__label}>Items: {this.props.cartItems.length} {this.props.cartItems.length > 0 ? 'pcs' : ''}</p>
                                    {this.renderItems()}
                                </div>



                                <p className={styles.order__label}>Tax: <span className={styles.count}>${tax.toFixed(2)}</span></p>
                                <p className={styles.order__label}>Shipping: <span className={styles.count}>$30.00</span></p>
                                <p className={styles.order__label} style={{color: 'red'}}>Total: <span className={styles.count}>${totalAfterTax.toFixed(2)}</span></p>

                                <button className={styles.checkout__btn}>Proceed to Payment</button>
                            </div>

                        </div>
                        
                    </div>

                    

                </div>
            </div>
        )
        :
        <Redirect to='/login' />
    }
}

export default Checkout;