import React from 'react';

import styles from './Home.module.css';

// import Header from '../../components/Header/Header';
import TopSection from '../../components/TopSection/TopSection';



class Home extends React.Component{

    render(){

        return (

            <div className={styles.home}>


                {/* <Header /> */}

                <TopSection />

            </div>


        )
    }
}

export default Home;