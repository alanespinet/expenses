import React from 'react'

const View = props => {
  return (
    <div className="view">
      <div className="header">
      </div>

      <main>
        <div className="container">
          { props.children }
        </div>
      </main>

      <div className="footer">
      </div>
    </div>
  )
}

export default View;
