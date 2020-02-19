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
import Checkout from './pages/Checkout/Checkout';

import Popup from './components/Popup/Popup';
import Header from './components/Header/Header';

import Backdrop from './UI/Backdrop/Backdrop';
import Sidebar from './components/Sidebar/Sidebar';


import {auth, createUserProfileDocument} from './firebase/firebase';



class App  extends React.Component {


  state = {
    showPopup: false,

    cartItems: [],

    currentUser: null,

    showSidemenu: false
  }

  unsubscribeFromAuth = null;

  componentDidMount(){

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
     
      if (userAuth){

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })

      }else{
        this.setState({
          currentUser: null
        })
      }

    });

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth = null;
  }


  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }

  addItemToCart = (item) => {
    
    const cartItems = [...this.state.cartItems];
    const updatedCartItems = [...cartItems, item]
    this.setState({
      cartItems: updatedCartItems
    });

  }
  
  removeItemFromCart = (index) => {
    const cartItems = [...this.state.cartItems];
    
    const updatedItems = cartItems.filter((elem, i) => i !== parseInt(index));
    

    this.setState({
      cartItems: updatedItems
    })
    

  }

  toggleSidemenu = () => {
    this.setState({
      showSidemenu: !this.state.showSidemenu
    })
  }

  render(){
    // console.log(this.state.cartItems);
    
    const itemsNumber = this.state.cartItems.length;

    return (
      <div className="App main">


        <Header toggle={this.togglePopup} itemsNumber={itemsNumber} currentUser={this.state.currentUser} showSidemenu={this.state.showSidemenu} toggleSidemenu={this.toggleSidemenu}/>

        <Switch >

          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/new' exact component={NewArrivals} />
          <Route path='/products' exact component={Products} />

          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/products/:id' exact render={(props) => <SingleProduct {...props} addItemToCart={this.addItemToCart} currentUser={this.state.currentUser}/>} />

          <Route path="/account" exact component={Account} />
          <Route path="/changePassword" exact component={ChangePassword} />
          <Route path="/orders" exact component={Orders} />
          <Route path='/checkout' exact render={(props) => (<Checkout {...props} cartItems={this.state.cartItems} currentUser={this.state.currentUser}/>)}/>
 
        </Switch>


        <Popup show={this.state.showPopup} cartItems={this.state.cartItems} removeItemFromCart={this.removeItemFromCart} togglePopup={this.togglePopup}/>
        
        <Backdrop show={this.state.showPopup} toggle={this.togglePopup}/>

        <Sidebar show={this.state.showSidemenu}/>

      </div>
    );
  }
}

export default App;
