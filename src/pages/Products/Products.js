
import React from 'react';

import styles from './Products.module.css';


import Header from '../../components/Header/Header';
import Filter from '../../components/Filter/Filter';
import ProductList from '../../components/ProductList/ProductList';


class Products extends React.Component{


    render(){

        return (
            <div className={styles.products}>

                <Header />

                <div className={styles.left}>

                    <Filter />

                </div>

                <div className={styles.right}>

                    <ProductList />
                    
                </div>


            </div>
        )
    }
}

export default Products;