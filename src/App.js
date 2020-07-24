import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';

// Connecting our app to our global state redux store
// xx Wrap the whole app in a "store provider"
// -- Pick individual components to "connect" and become "consumers"

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <BrowserRouter>
                    <Header />
                    <div className="Main">
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/product/:id' component={ProductDetails}/>
                        <Route path='/cart' component={ShoppingCart} />
                    </div>
                    <Footer />
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
