
import React from 'react';

import styles from './NewArrivals.module.css';


import Filter from '../../components/Filter/Filter';
import ProductList from '../../components/ProductList/ProductList';

import {data} from './data';

class NewArrivals extends React.Component{


    state = {
        data: '',
        filters: {}
    }

    componentDidMount = () => {
        this.setState({
            data: data
        })
    }

    addFilter = (name, value) => {
        this.setState({
            filters: {
                ...this.state.filters,
                [name]: value
            }
        })
    }

    removeFilter = (name, value) => {
        let currentStateFilters  = {...this.state.filters};
        if (currentStateFilters.hasOwnProperty(name) && currentStateFilters[name] === value){
            delete currentStateFilters[name];
        }
        this.setState({
            filters: currentStateFilters
        })
    }

    removePriceFilter = () => {
        let currentFilters = {...this.state.filters};
        if (currentFilters.hasOwnProperty('price')){
            delete currentFilters['price'];
        }

        this.setState({
            filters: currentFilters
        })
    }

    applyFilter = (currentData) => {

        const filters = this.state.filters;
        let updatedData = [...currentData];
        let filterArr = Object.keys(filters);
        // console.log(filters);

        if (filterArr.length === 0){
            return updatedData;

        }else{

            for (let key in filters){

                if (key === 'gender'){
                    updatedData = updatedData.filter(elem => elem.gender === filters[key]);
                }

                if (key === 'brand'){
                    updatedData = updatedData.filter(elem => elem.brand === filters[key]);
                }

                if (key === 'size'){
                    updatedData = updatedData.filter(elem => elem.size === filters[key])
                }

                if (key === 'price'){
                    updatedData = updatedData.filter(elem => parseInt(elem.price) <= parseInt(filters[key]))
                }
                          
            }
        }

        return updatedData;
    }

    clearFilters = () => {
        this.setState({
            filters: {}
        })
    }


    render(){
        const updatedData = this.applyFilter(this.state.data);
    //    console.log(updatedData);

    //    console.log(this.state.filters);

        return (
            <div className={styles.products}>


                <div className={styles.left}>

                    <Filter  addFilter={this.addFilter} removeFilter={this.removeFilter} removePriceFilter={this.removePriceFilter} clearFilters={this.clearFilters}/>

                </div>

                <div className={styles.right}>

                    <ProductList data={updatedData}/>
                    
                </div>


            </div>
        )
    }
}

export default NewArrivals;