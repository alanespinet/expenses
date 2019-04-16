import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import View from './components/View'
import Login from './components/pages/Login'
import Add from './components/pages/Add'
import About from './components/pages/About'
import ShopList from './components/ShopList'

import Home from './components/pages/Home'

import './App.scss'

import store from './redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <BrowserRouter>
            <div>
              <Route path="/" exact={true} component={ Home } />
              <Route path="/add" exact={true} component={ Add } />
              <Route path="/login" exact={true} component={ Login } />
              <Route path="/about" exact={true} component={ About } />
            </div>
          </BrowserRouter>
        </View>
      </Provider>
    );
  }
}

export default App;
