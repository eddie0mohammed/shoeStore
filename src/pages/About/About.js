
import React from 'react';


import styles from './About.module.css';

// import Header from '../../components/Header/Header';

class About extends React.Component{


    render(){

        return (
            <div className={styles.about}>


                {/* <Header /> */}

                <div className={styles.container}>
                    
                    <h2 className={styles.header}>About</h2>
                    <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum repellendus tenetur hic, quas ipsum voluptate debitis nostrum quod maxime doloremque! Modi natus mollitia esse non perferendis, et doloremque vitae possimus dolore dolores ex impedit id in, obcaecati earum enim. Doloremque numquam, cupiditate voluptate autem ratione officiis vero qui rerum? Assumenda, adipisci voluptas perspiciatis dolorem vitae illum sit veritatis quaerat, non a ea nostrum, pariatur qui vel corrupti? Ea ratione ad aut ab autem pariatur odit debitis velit nemo qui quos suscipit, necessitatibus ullam fugit ducimus dolorum voluptates. Ducimus voluptatem fuga quisquam aspernatur placeat quae tempora corporis fugiat voluptas? Praesentium, ipsam?</p>
                </div>
            </div>
        )
    }
}

export default About;