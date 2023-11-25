import './App.css';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './layouts/Main';
import Routes from './routes/Router';

const App = () => {
  
  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );

};

export default App;