import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Products from './components/Products';
import Categories from './components/Categories';
import Header from './components/Header';
import Footer from './components/Footer';
import ActiveCategory from './components/ActiveCategory';

// Connecting our app to our global state redux store
// xx Wrap the whole app in a "store provider"
// -- Pick individual components to "connect" and become "consumers"

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <Header />
                <div className="Main">
                    <Categories />
                    <ActiveCategory />
                    <Products />
                </div>
                <Footer />
            </div>
        </Provider>
    );
}

export default App;
