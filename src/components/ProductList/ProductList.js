
import React from 'react';

import styles from './ProductList.module.css';


class ProductList extends React.Component{


    render(){

        return (
            <div className={styles.productList}>

                <div className={styles.itemContainer}>

                    <div className={styles.background}></div>

                    <div className={styles.img}></div>

                    <div className={styles.textBox}>
                        <h4 className={styles.model}>Boost 350 White</h4>
                        <p className={styles.price}>$350</p>
                    </div>
                </div>

                <div className={styles.itemContainer}>

                    <div className={styles.background}></div>

                    <div className={styles.img}></div>

                    <div className={styles.textBox}>
                        <h4 className={styles.model}>Boost 350 White</h4>
                        <p className={styles.price}>$350</p>
                    </div>
                </div>

                <div className={styles.itemContainer}>

                    <div className={styles.background}></div>

                    <div className={styles.img}></div>

                    <div className={styles.textBox}>
                        <h4 className={styles.model}>Boost 350 White</h4>
                        <p className={styles.price}>$350</p>
                    </div>
                </div>

                <div className={styles.itemContainer}>

                    <div className={styles.background}></div>

                    <div className={styles.img}></div>

                    <div className={styles.textBox}>
                        <h4 className={styles.model}>Boost 350 White</h4>
                        <p className={styles.price}>$350</p>
                    </div>
                </div>

                <div className={styles.itemContainer}>

                    <div className={styles.background}></div>

                    <div className={styles.img}></div>

                    <div className={styles.textBox}>
                        <h4 className={styles.model}>Boost 350 White</h4>
                        <p className={styles.price}>$350</p>
                    </div>
                </div>

                <div className={styles.itemContainer}>

                    <div className={styles.background}></div>

                    <div className={styles.img}></div>

                    <div className={styles.textBox}>
                        <h4 className={styles.model}>Boost 350 White</h4>
                        <p className={styles.price}>$350</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default ProductList;