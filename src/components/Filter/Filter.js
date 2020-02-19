
import React from 'react';

import styles from './Filter.module.css';



class Filter extends React.Component{


    state = {
        gender: false,
        brand: false,
        price: false,
        size: false,

        filters: false,

        initialPrice: '0',
        min: 0,
        max: 1000
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

    handleButtonClick = (e) => {
        if (e.target.classList.contains('selected')){
            e.target.classList.remove('selected');
            this.props.removeFilter(e.target.name, e.target.textContent.toLowerCase());
            
        }else{
            e.target.parentElement.childNodes.forEach(elem => {
                elem.classList.remove('selected');
            })
            e.target.classList.add('selected');
            this.props.addFilter(e.target.name, e.target.textContent.toLowerCase());
            
        }
        // console.log(`${e.target.name}: ${e.target.textContent.toLowerCase()}`)
    }

    handlePrice = (e) => {

        this.setState({
            initialPrice: e.target.value
        })
            
        if (e.target.value === '0'){
            this.props.removePriceFilter();
        }else{
            this.props.addFilter('price', this.state.initialPrice);
        }


    }

    handleClearFilters = () => {
        this.props.clearFilters();
        window.location.reload();
        
    }

    handleFilterClick = () => {
        this.setState({
            filters: !this.state.filters
        })
    }

    render(){

        // console.log(this.state.initialPrice);

        return (
            <div className={styles.filter}>

                <div className={`${styles.item } ${styles.filterBtn}` } onClick={this.handleFilterClick}>
                    <p className={styles.label}>Filters</p>
                    <p className={styles.sign}>{this.state.filters ? '-' : '+'}</p>
                </div>

                <div className={styles.filter__container} style={{display: `${this.state.filters ? 'block' : 'none'}`}}>    

                    {/* gender */}
                    <div className={`${styles.item}`} onClick={this.handleGenderClick}>
                        <p className={styles.label}>Gender</p>
                        <p className={styles.sign}>{this.state.gender ? '-' : '+'}</p>
                    </div>

                    <div className={styles.choiceContainer} style={{display: `${this.state.gender ? 'flex' : 'none'}`}}>
                        <button className={styles.choice} name="gender" onClick={this.handleButtonClick}>Male</button>
                        <button className={styles.choice} name="gender" onClick={this.handleButtonClick}>Female</button>
                    </div>

                    {/* brand */}
                    <div className={styles.item} onClick={this.handleBrandClick}>
                        <p className={styles.label}>Brand</p>
                        <p className={styles.sign}>{this.state.brand ? '-' : '+'}</p>
                    </div>

                    <div className={styles.choiceContainer} style={{display: `${this.state.brand ? 'flex' : 'none'}`}}>
                        <button className={styles.choice} name='brand' onClick={this.handleButtonClick}>Adidas</button>
                        <button className={styles.choice} name="brand" onClick={this.handleButtonClick}>Nike</button>
                        <button className={styles.choice} name="brand" onClick={this.handleButtonClick}>Gucci</button>
                        <button className={styles.choice} name='brand' onClick={this.handleButtonClick}>New Balance</button>
                        <button className={styles.choice} name='brand' onClick={this.handleButtonClick}>Dolce & Gabana</button>
                        <button className={styles.choice} name='brand' onClick={this.handleButtonClick}>Versace</button>
                    </div>

                    {/* PRICE */}
                    <div className={styles.item} onClick={this.handlePriceClick}>
                        <p className={styles.label}>Price</p>
                        <p className={styles.sign}>{this.state.price ? '-' : '+'}</p>
                    </div>

                    <div className={styles.choiceContainer} style={{display: `${this.state.price ? 'flex' : 'none'}`}}>

                        {/* <input type="number" name="minPrice" className={styles.priceInput} placeholder="Min"/> */}
                        <div className={styles.priceLabel__container}>
                            <p className={styles.pricelabel}>Min: $ 0</p>
                            <p className={styles.pricelabel}>Max: $ {this.state.initialPrice}</p>
                        </div>
                        <input type="range" name="price" className={styles.priceInput} min={this.state.min} max={this.state.max} placeholder="Max Price"  value={this.state.initialPrice} onChange={this.handlePrice}/>

                    </div>

                    {/* SIZE */}
                    <div className={styles.item} onClick={this.handleSizeClick}>
                        <p className={styles.label}>Size</p>
                        <p className={styles.sign}>{this.state.size ? '-' : '+'}</p>
                    </div>

                    <div className={styles.choiceContainer} style={{display: `${this.state.size ? 'flex' : 'none'}`}}>
                        < button className={styles.choice} name="size" onClick={this.handleButtonClick}>7</ button>
                        < button className={styles.choice} name="size" onClick={this.handleButtonClick}>7.5</ button>
                        < button className={styles.choice} name="size" onClick={this.handleButtonClick}>8</ button>
                        < button className={styles.choice} name="size" onClick={this.handleButtonClick}>8.5</ button>
                        < button className={styles.choice} name="size" onClick={this.handleButtonClick}>9</ button>
                        < button className={styles.choice} name="size" onClick={this.handleButtonClick}>9.5</ button>
                        < button className={styles.choice} name="size" onClick={this.handleButtonClick}>10</ button>
                        < button className={styles.choice} name="size" onClick={this.handleButtonClick}>10.5</ button>
                        < button className={styles.choice} name="size" onClick={this.handleButtonClick}>11</ button>
                        < button className={styles.choice} name="size" onClick={this.handleButtonClick}>11.5</ button>
                        < button className={styles.choice} name="size" onClick={this.handleButtonClick}>12</ button>
                        < button className={styles.choice} name="size" onClick={this.handleButtonClick}>12.5</ button>
                    </div>

                    <button className={styles.btn} onClick={this.handleClearFilters}>Clear Filters</button> 
                
                </div>
            </div>
        )
    }
}

export default Filter;