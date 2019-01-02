import React, { Component } from 'react'
import searchLogo from './search.png'
import profileLogo from './profile.png'
import saveLogo from './save.png'
import mainLogo from './main.png'

class Navbar extends Component {

  render () {
    return (
      <div id='navigation-container'>
        <div id='navigation-bar'>
          <div id='main-logo-cont'>
            <img id='main-logo' src={mainLogo} />
          </div>
          <ul id="navigation-primary">
          <li className="nav-item profile">
          <span className="nav-item-icon">
            <img className='logo' src={profileLogo}/>
          </span>
          </li>
            <li className="nav-item search">
            <span className="nav-item-icon">
              <img className='logo' src={searchLogo}/>
            </span>
            </li>
          <li className="nav-item save">
            <span className="nav-item-icon">
              <img className='logo' src={saveLogo}/>
            </span>
          </li>
          </ul>
        </div>
      </div>
    )
  }


}

export default Navbar
