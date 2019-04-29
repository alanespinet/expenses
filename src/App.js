import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import View from './components/View'
import Login from './components/pages/Login'
import Add from './components/pages/Add'
import Filters from './components/pages/Filters'
import Edit from './components/pages/Edit'
import Reports from './components/pages/Reports'
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
              <Route path="/add" component={ Add } />
              <Route path="/filters" component={ Filters } />
              <Route path="/edit" component={ Edit } />
              <Route path="/reports" component={ Reports } />
              <Route path="/login" component={ Login } />
              <Route path="/about" component={ About } />
            </div>
          </BrowserRouter>
        </View>
      </Provider>
    );
  }
}

export default App;
