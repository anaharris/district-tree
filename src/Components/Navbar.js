import React, {Component} from 'react'
import {Image, Menu, Sidebar} from 'semantic-ui-react'
import Filters from './Filters'
import About from './About'
import navbarLogo from './logo-circular-full.png'
import about from './about-icon.png'
import filter from './filter-icon.png'


class Navbar extends Component {
  state = {
    filterVisibility: false,
    aboutVisibility: false
   }

  handleFilterClick = () => this.setState({ filterVisibility: !this.state.filterVisibility, aboutVisibility: false })
  handleAboutClick = () => this.setState({ aboutVisibility: !this.state.aboutVisibility, filterVisibility: false })

  render() {
    const pinkStyling = {color: '#edc4bc'}

    return (
      <div>
        <Sidebar
          as={Menu}
          direction='right'
          animation='overlay'
          icon='labeled'
          inverted
          vertical
          visible={true}
          width='thin'
          style={{backgroundColor: '#3a5344', width: '8%'}}
        >
          <Menu.Item style={pinkStyling}>
            <Image src={navbarLogo} style={{width: '90%', margin: 'auto'}}/>
          </Menu.Item>

          <Menu.Item as='a' style={pinkStyling} onClick={this.handleFilterClick}>
            <Image src={filter} style={{width: '50%', margin: '10% auto'}}/>
          </Menu.Item>
          <Menu.Item as='a' style={pinkStyling} onClick={this.handleAboutClick}>
            <Image src={about} style={{width: '50%', margin: '10% auto'}}/>
          </Menu.Item>
        </Sidebar>

        <Filters visible={this.state.filterVisibility}/>
        <About visible={this.state.aboutVisibility}/>
      </div>
    )
  }

}

export default Navbar
