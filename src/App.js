import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import NewArrivals from './pages/NewArrivals/NewArrivals';
import Products from './pages/Products/Products';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Account from './pages/Account/Account';
import ChangePassword from './pages/ChangePassword/ChangePassword';
import Orders from './pages/Orders/Orders';

import Popup from './components/Popup/Popup';
import Header from './components/Header/Header';

import Backdrop from './UI/Backdrop/Backdrop';



class App  extends React.Component {


  state = {
    showPopup: false,
  }


  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }

  render(){

  
    return (
      <div className="App">


        <Header toggle={this.togglePopup}/>

        <Switch >

          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/new' exact component={NewArrivals} />
          <Route path='/products' exact component={Products} />

          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/product' exact component={SingleProduct} />

          <Route path="/account" exact component={Account} />
          <Route path="/changePassword" exact component={ChangePassword} />
          <Route path="/orders" exact component={Orders} />
 
        </Switch>


        <Popup show={this.state.showPopup}/>
        
        <Backdrop show={this.state.showPopup} toggle={this.togglePopup}/>

      </div>
    );
  }
}

export default App;
