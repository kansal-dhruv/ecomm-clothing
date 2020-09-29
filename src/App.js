import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomepageMenu from "./Pages/Homepage/HomepageMenu";
import Shop from "./Pages/shop/shop";
function App() {
  return (
    <div className="App">
        <Route exact path="/" component={HomepageMenu}  />
        <Route path="/shop" component={Shop} />
    </div>
  );
}

export default App;
