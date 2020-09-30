import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomepageMenu from "./Pages/Homepage/HomepageMenu";
import Shop from "./Pages/shop/shop";
import SignUpIn from "./Pages/SignUpIn/SignUpIn";
function App() {
  return (
    <div className="App">
        <Route exact path="/" component={HomepageMenu}  />
        <Route path="/shop" component={Shop} />
        <Route path="/signUpIn" component={SignUpIn} />
    </div>
  );
}

export default App;
