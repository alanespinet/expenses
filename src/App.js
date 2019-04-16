import React, { Component } from 'react'
import { Provider } from 'react-redux'

import View from './components/View'
import ShopList from './components/ShopList'

import './App.scss'

import store from './redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <p>App</p>
          <ShopList />
        </View>
      </Provider>
    );
  }
}

export default App;
