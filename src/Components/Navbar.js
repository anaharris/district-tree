import React, { Component } from 'react'
import searchLogo from '../assets/png/search.png'
import profileLogo from '../assets/png/profile.png'
import saveLogo from '../assets/png/like.png'
import mainLogo from '../assets/png/main2.png'

class Navbar extends Component {

  render () {
    return (
      <div id='navigation-container'>
        <div id='navigation-bar'>
          <ul id="navigation-primary">
          <li className="nav-item profile">
          <span className="nav-item-icon">
            L
          </span>
          </li>
            <li className="nav-item search">
            <span className="nav-item-icon">
              S
            </span>
            </li>
          <li className="nav-item save">
            <span className="nav-item-icon">
              +
            </span>
          </li>
          </ul>
        </div>
      </div>
    )
  }


}

export default Navbar
