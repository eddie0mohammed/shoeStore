
import React from 'react';

import styles from './SingleProduct.module.css';

// import Header from '../../components/Header/Header';

class SingleProduct extends React.Component{


    state = {
        size: false,
        delivery: false,
        refund: false
    }

    handleSizeClick = () => {
        this.setState({
            size: !this.state.size
        })
    }

    handleDeliveryClick = () => {
        this.setState({
            delivery: !this.state.delivery
        })
    }

    handleRefundClick = () => {
        this.setState({
            refund: !this.state.refund
        })
    }

    render(){

        return (
            <div className={styles.singleProduct}>

                {/* <Header /> */}

                <div className={styles.container}>

                    <div className={styles.left}>

                        <div className={styles.background}></div>

                        <div className={styles.img}></div>


                    </div>

                    <div className={styles.right}>

                        <p className={styles.brand}>Adidas</p>

                        <h2 className={styles.header}>Yeezy Boost 350 White</h2>

                        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nam, ducimus officiis tempore necessitatibus dolorem voluptate magni ratione vero. Temporibus odit dignissimos qui molestiae omnis, necessitatibus facilis explicabo iste quasi sit beatae, nostrum quas accusamus. Cum temporibus consequatur vitae cumque minima culpa reprehenderit a nihil ipsam! Voluptate expedita ipsum laudantium voluptates maiores ullam officia sint saepe delectus facilis nam, eligendi quia debitis, repellendus soluta repudiandae qui! Voluptatem perferendis voluptate temporibus enim culpa sapiente rerum in consequuntur odit quam amet iusto aliquam deserunt sit, cupiditate at obcaecati explicabo sint eaque repellendus vitae velit. Optio possimus ab ut magni at, earum quod.</p>

                        {/* SIZE */}
                        <div className={styles.item} onClick={this.handleSizeClick}>
                            <p className={styles.label}>Size</p>
                            <p className={styles.sign}>{this.state.size ? '-' : '+'}</p>
                        </div>

                        <div className={styles.choiceContainer} style={{display: `${this.state.size ? 'flex' : 'none'} `}}>
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

                        {/* DELIVERY */}
                        <div className={styles.item} onClick={this.handleDeliveryClick}>
                            <p className={styles.label}>Delivery</p>
                            <p className={styles.sign}>{this.state.delivery ? '-' : '+'}</p>
                        </div>

                        
                        <p className={styles.desc} style={{display: `${this.state.delivery ? 'block' : 'none'}`}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nisi maxime corporis ex sit possimus iure doloremque porro ipsam nobis laudantium assumenda optio odit nostrum reiciendis, illo ducimus minus tempore itaque aspernatur minima molestias vel id deleniti. Itaque totam nihil nulla laboriosam vitae, accusantium esse minus mollitia? Asperiores, doloremque aperiam!</p>
                         

                         {/* REFUND */}
                         <div className={styles.item} onClick={this.handleRefundClick}>
                            <p className={styles.label}>Refund</p>
                            <p className={styles.sign}>{this.state.refund ? '-' : '+'}</p>
                        </div>

                        <p className={styles.desc} style={{display: `${this.state.refund ? 'block' : 'none'} `}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nisi maxime corporis ex sit possimus iure doloremque porro ipsam nobis laudantium assumenda optio odit nostrum reiciendis, illo ducimus minus tempore itaque aspernatur minima molestias vel id deleniti. Itaque totam nihil nulla laboriosam vitae, accusantium esse minus mollitia? Asperiores, doloremque aperiam!</p>

                    </div>

                </div>

            </div>
        )
    }
}

export default SingleProduct;