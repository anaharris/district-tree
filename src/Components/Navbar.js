import React, {Component} from 'react'
import {Icon, Image, Menu, Sidebar} from 'semantic-ui-react'
import navbarLogo from './navbarLogo.png'


class Navbar extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const {visible} = this.state
    const pinkStyling = {color: '#edc4bc'}

    return (
      <Sidebar
        as={Menu}
        direction='right'
        animation='overlay'
        icon='labeled'
        inverted
        onHide={this.handleSidebarHide}
        vertical
        visible={true}
        width='thin'
        style={{backgroundColor: '#3a5344', width: '8%'}}
      >
      <Menu.Item as='a' style={pinkStyling}>
        <Image src={navbarLogo} style={{width: '90%', margin: 'auto'}}/>
      </Menu.Item>
        <Menu.Item as='a' style={pinkStyling}>
          <Icon name='home' style={pinkStyling}/>
          Home
        </Menu.Item>
        <Menu.Item as='a' style={pinkStyling}>
          <Icon name='search' style={pinkStyling}/>
          Search
        </Menu.Item>
      </Sidebar>
    )
  }

}

export default Navbar
