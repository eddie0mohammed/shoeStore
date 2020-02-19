import React from 'react';

import styles from './Home.module.css';

import TopSection from '../../components/TopSection/TopSection';



class Home extends React.Component{

    render(){

        return (

            <div className={styles.home}>



                <TopSection />

            </div>


        )
    }
}

export default Home;