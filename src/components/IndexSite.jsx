import React, { Component } from 'react'
import HelmetSite from './inc/HelmetSite'
import NavUserSite from './inc/NavUserSite'


export class IndexSite extends Component {
    render() {
        return (
             <div className="App">
      <HelmetSite title={`Landin page`} />
      <header className="App-header">
      <NavUserSite/>
        <p>
           Landin page
        </p>
        <h1>Home</h1>
      </header>
    </div>
        )
    }
}

export default IndexSite
