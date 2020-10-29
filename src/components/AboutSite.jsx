import React, { Component } from 'react'
import HelmetSite from './inc/HelmetSite'
import NavUserSite from './inc/NavUserSite'

export class AboutSite extends Component {
    render() {
        return (
             <div className="App">
      <HelmetSite title={`About page`} />
      <header className="App-header">
      <NavUserSite/>
        <p>
           About page
        </p>
        
        <h1>About</h1>
      </header>
    </div>
        )
    }
}

export default AboutSite
