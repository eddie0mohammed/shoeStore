
import React from 'react';

import styles from './ProductList.module.css';

import {withRouter} from 'react-router-dom';


class ProductList extends React.Component{



    handleClick = () => {
        this.props.history.push('/product');
        // console.log(this.props);
    }

    render(){

        return (
            <div className={styles.productList}>

                <div className={styles.itemContainer} onClick={this.handleClick}>

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

export default withRouter(ProductList);