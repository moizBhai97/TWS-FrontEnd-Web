import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import { Provider } from 'react-redux';
import store from '../reduxes/ConfigRedux';

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </Provider>
  );
};

export default Layout;