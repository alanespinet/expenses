import React from 'react'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Menu from './Layout/Menu'


const View = props => {
  return (
    <div className="view">
      <Header />

      <main>
        <div className="container">
          { props.children }
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default View;
