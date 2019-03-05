import React, { Component } from 'react'
import searchLogo from './search.png'
import saveLogo from './save.png'
import mainLogo from './main.png'

class Navbar extends Component {

  render () {
    return (
      <div id='navigation-container'>
        <div id='navigation-bar'>
          <div id='main-logo-cont'>
            <img id='main-logo' src={mainLogo} alt='District Tree logo'/>
          </div>
          <ul id="navigation-primary">
            <li className="nav-item search">
            <span className="nav-item-icon">
              <img className='logo' src={searchLogo} alt='search icon'/>
            </span>
            </li>
          <li className="nav-item save">
            <span className="nav-item-icon">
              <img className='logo' src={saveLogo} alt='tree icon'/>
            </span>
          </li>
          </ul>
        </div>
      </div>
    )
  }


}

export default Navbar
