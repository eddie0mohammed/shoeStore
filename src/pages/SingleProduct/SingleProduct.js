
import React from 'react';

import styles from './SingleProduct.module.css';

import {data} from '../../pages/Products/data';

import {Redirect} from 'react-router-dom';

// import Header from '../../components/Header/Header';

class SingleProduct extends React.Component{


    state = {
        currentShoes: '',
        size: false,
        delivery: false,
        refund: false,

        currentSize: ''
    }

    componentDidMount(){

        const currentData = data.filter(elem => elem.id === this.props.match.params.id)[0];
        // console.log(currentData);
        
        this.setState({
            currentShoes: currentData
        })
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

    handleSizeValueClick = (e) => {

        
        //add selected to clicked element
        if (e.target.classList.contains('selected')){
            e.target.classList.remove('selected');
            this.setState({
                currentSize: ''
            })

        }else{
            //remove selected class from all 
            e.target.parentElement.childNodes.forEach(elem => {
                elem.classList.remove('selected');
            });
            // add selected to clicked item
            e.target.classList.add('selected');
            this.setState({
                currentSize: e.target.textContent
            })

        }

    }

    handleAddClick = () => {
        
        // console.log(`selected Item: ${this.state.currentSize}`);

        // console.log('add to cart');
        let currentShoes = this.state.currentShoes;
        currentShoes.size = this.state.currentSize;
        this.props.addItemToCart(currentShoes);
        this.props.history.push('/products');

    }


    render(){

        // console.log(this.state.currentShoes);
       
        return this.props.currentUser ? 

        (
            <div className={styles.singleProduct}>

                {/* <Header /> */}

                <div className={styles.container}>

                    <div className={styles.left}>

                        <div className={styles.background}></div>

                        <div className={styles.img} style={{backgroundImage: `url(${this.state.currentShoes.img})`}}></div>

 
                    </div>

                    <div className={styles.right}>

                        <p className={styles.brand}>{this.state.currentShoes.brand}</p>

                        <h2 className={styles.header}>{this.state.currentShoes.productName}</h2>

                        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nam, ducimus officiis tempore necessitatibus dolorem voluptate magni ratione vero. Temporibus odit dignissimos qui molestiae omnis, necessitatibus facilis explicabo iste quasi sit beatae, nostrum quas accusamus. Cum temporibus consequatur vitae cumque minima culpa reprehenderit a nihil ipsam! Voluptate expedita ipsum laudantium voluptates maiores ullam officia sint saepe delectus facilis nam, eligendi quia debitis, repellendus soluta repudiandae qui! Voluptatem perferendis voluptate temporibus enim culpa sapiente rerum in consequuntur odit quam amet iusto aliquam deserunt sit, cupiditate at obcaecati explicabo sint eaque repellendus vitae velit. Optio possimus ab ut magni at, earum quod.</p>

                        {/* SIZE */}
                        <div className={styles.item} onClick={this.handleSizeClick}>
                            <p className={styles.label}>Size</p>
                            <p className={styles.sign}>{this.state.size ? '-' : '+'}</p>
                        </div>

                        <div className={styles.choiceContainer} style={{display: `${this.state.size ? 'flex' : 'none'} `}}>
                            <div className={styles.choice} onClick={this.handleSizeValueClick} >7</div>
                            <div className={styles.choice} onClick={this.handleSizeValueClick} >7.5</div>
                            <div className={styles.choice} onClick={this.handleSizeValueClick} >8</div>
                            <div className={styles.choice} onClick={this.handleSizeValueClick} >8.5</div>
                            <div className={styles.choice} onClick={this.handleSizeValueClick} >9</div>
                            <div className={styles.choice} onClick={this.handleSizeValueClick} >9.5</div>
                            <div className={styles.choice} onClick={this.handleSizeValueClick} >10</div>
                            <div className={styles.choice} onClick={this.handleSizeValueClick} >10.5</div>
                            <div className={styles.choice} onClick={this.handleSizeValueClick} >11</div>
                            <div className={styles.choice} onClick={this.handleSizeValueClick} >11.5</div>
                            <div className={styles.choice} onClick={this.handleSizeValueClick} >12</div>
                            <div className={styles.choice} onClick={this.handleSizeValueClick} >12.5</div>
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

                        <button className={styles.addBtn} onClick={this.handleAddClick} disabled={!this.state.currentSize} style={{color: `${this.state.currentSize ? 'grey' : 'red'}`}}>Add To Cart</button>

                    </div>

                </div>

            </div>
        )
        :
        (
            <Redirect to='/login' />
        )
    }
}

export default SingleProduct;