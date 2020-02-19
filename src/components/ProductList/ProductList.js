
import React from 'react';

import styles from './ProductList.module.css';

import {withRouter} from 'react-router-dom';


class ProductList extends React.Component{




    handleClick = (id) => {
        // console.log(id);
        this.props.history.push(`/products/${id}`);
        // console.log(this.props);
    }

    renderItem = () => {
        
        if (this.props.data === ''){
            return ;
        }else{
            return this.props.data.map(elem => {
                return (
                    <div key={elem.id} className={styles.itemContainer} onClick={() => this.handleClick(elem.id)}>

                        <div className={styles.background}></div>

                        <div className={styles.img} style={{backgroundImage: `url(${elem.img})`}}></div>

                        <div className={styles.textBox}>
                            <h4 className={styles.model}>{elem.productName}</h4>
                            <p className={styles.price}>${elem.price}</p>
                        </div>
                    </div>
                )
            })
        }
    }

    render(){

        return (
            <div className={styles.productList}>

                {this.renderItem()}

            </div>
        )
    }
}

export default withRouter(ProductList);