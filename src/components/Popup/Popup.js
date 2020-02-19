
import React from 'react';

import styles from './Popup.module.css';

import {withRouter} from 'react-router-dom';


class Popup extends React.Component{

    

    renderCartItems = () => {
        return this.props.cartItems.map((elem, i) => {
            return (
                <div key={i} className={styles.inner__container}>
                        
                    <div className={styles.product} style={{backgroundImage: `url(${elem.img})`}}></div>

                    <div className={styles.bar}>
                        <div className={styles.icon} onClick={this.handleRemove} id={i}>x</div>
                    </div>

                </div>
            )
        })
    }


    handleRemove = (e) => {
        // console.log(e.target.id);

        this.props.removeItemFromCart(e.target.id);
    }

    calculateTotal = () => {
        return this.props.cartItems.reduce((acc, elem) => {
            return acc + parseInt(elem.price)
        }, 0);
    }

    proceedCheckout = () => {
        this.props.togglePopup();
        this.props.history.push('/checkout');
    }


    render(){


        return (
            <div className={styles.popup} style={{transform: `${this.props.show ? 'translateY(0)' : 'translateY(-100%)'}`, visibility: `${this.props.show ? 'visible' : 'hidden'}`}}>

                <div className={styles.label__container}>
                    <p className={styles.label}>My Cart</p>
                </div>

                <div className={styles.products__container}>

                    
                    {this.renderCartItems()}


                </div>

                <div className={styles.number__container}>

                    <div className={styles.number__innerContainer}>
                        <p className={styles.header}>Total</p>
                        <p className={styles.exact}>X{this.props.cartItems.length}</p>
                    </div>

                </div>

                <div className={styles.price__container}>
                    
                    <div className={styles.price__innerContainer}>
                        <p className={styles.header}>Total</p>
                        <p className={styles.exact}>${this.calculateTotal()}</p>
                    </div>

                </div>

                <div className={styles.checkout__container}>

                    <div className={styles.checkout__label} onClick={this.proceedCheckout}>Checkout</div>
                    <i className="fa fa-shopping-cart"></i>

                </div>

            </div>
        )
    }
}

export default withRouter(Popup);