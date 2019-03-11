import React, {Component} from 'react'
import {Image, Menu, Sidebar, Popup} from 'semantic-ui-react'
import Filters from './Filters'
import About from './About'
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
          <Popup trigger={
              <Menu.Item as='a' style={pinkStyling} onClick={this.handleFilterClick}>
                <Image src={filter} style={{width: '50%', margin: '10% auto'}}/>
              </Menu.Item>
            }
            content="Filter trees"
            position='left center'
            basic
            style={{color: '#3a5344'}}
          />
          <Popup trigger={
              <Menu.Item as='a' style={pinkStyling} onClick={this.handleAboutClick}>
                <Image src={about} style={{width: '50%', margin: '10% auto'}}/>
              </Menu.Item>
            }
            content="About"
            position='left center'
            basic
            style={{color: '#3a5344'}}
          />
        </Sidebar>

        <Filters
          visible={this.state.filterVisibility}
          handleFilters={this.props.handleFilters}
          resetFilters={this.props.resetFilters}
        />
        <About visible={this.state.aboutVisibility}/>
      </div>
    )
  }

}

export default Navbar
