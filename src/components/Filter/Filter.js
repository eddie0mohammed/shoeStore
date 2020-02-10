
import React from 'react';

import styles from './Filter.module.css';


class Filter extends React.Component{


    state = {
        gender: false,
        brand: false,
        price: false,
        size: false
    }

    handleGenderClick = () => {
        this.setState({
            gender: !this.state.gender
        })
    }

    handleBrandClick = () => {
        this.setState({
            brand: !this.state.brand
        })
    }

    handlePriceClick = () => {
        this.setState({
            price: !this.state.price
        })
    }

    handleSizeClick = () => {
        this.setState({
            size: !this.state.size
        })
    }

    render(){

        return (
            <div className={styles.filter}>


                {/* gender */}
                <div className={`${styles.item}`} onClick={this.handleGenderClick}>
                    <p className={styles.label}>Gender</p>
                    <p className={styles.sign}>{this.state.gender ? '-' : '+'}</p>
                </div>

                <div className={styles.choiceContainer} style={{display: `${this.state.gender ? 'flex' : 'none'}`}}>
                    <p className={styles.choice}>Male</p>
                    <p className={styles.choice}>Female</p>
                </div>

                {/* brand */}
                <div className={styles.item} onClick={this.handleBrandClick}>
                    <p className={styles.label}>Brand</p>
                    <p className={styles.sign}>{this.state.brand ? '-' : '+'}</p>
                </div>

                <div className={styles.choiceContainer} style={{display: `${this.state.brand ? 'flex' : 'none'}`}}>
                    <p className={styles.choice}>Adidas</p>
                    <p className={styles.choice}>Nike</p>
                    <p className={styles.choice}>Gucci</p>
                    <p className={styles.choice}>New Balance</p>
                    <p className={styles.choice}>Dolce & Gabana</p>
                    <p className={styles.choice}>Versace</p>
                </div>

                {/* PRICE */}
                <div className={styles.item} onClick={this.handlePriceClick}>
                    <p className={styles.label}>Price</p>
                    <p className={styles.sign}>{this.state.price ? '-' : '+'}</p>
                </div>

                <div className={styles.choiceContainer} style={{display: `${this.state.price ? 'flex' : 'none'}`}}>

                    <input type="number" name="min" className={styles.priceInput} placeholder="Min"/>
                    <input type="number" name="man" className={styles.priceInput} placeholder="Max"/>

                </div>

                {/* SIZE */}
                <div className={styles.item} onClick={this.handleSizeClick}>
                    <p className={styles.label}>Size</p>
                    <p className={styles.sign}>{this.state.size ? '-' : '+'}</p>
                </div>

                <div className={styles.choiceContainer} style={{display: `${this.state.size ? 'flex' : 'none'}`}}>
                    <p className={styles.choice}>7</p>
                    <p className={styles.choice}>7.5</p>
                    <p className={styles.choice}>8</p>
                    <p className={styles.choice}>8.5</p>
                    <p className={styles.choice}>9</p>
                    <p className={styles.choice}>9.5</p>
                    <p className={styles.choice}>10</p>
                    <p className={styles.choice}>10.5</p>
                    <p className={styles.choice}>11</p>
                    <p className={styles.choice}>11.5</p>
                    <p className={styles.choice}>12</p>
                    <p className={styles.choice}>12.5</p>
                </div>

                <button className={styles.btn}>Filter</button> 

            </div>
        )
    }
}

export default Filter;