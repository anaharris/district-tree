import React, {Component} from 'react'
import {Sidebar, Segment, Divider, Header, Image} from 'semantic-ui-react'
import logo from './dt-logo.png'

class About extends Component {

  render() {
    return (
          <Sidebar
            as={Segment}
            animation='overlay'
            icon='labeled'
            direction='right'
            visible={this.props.visible}
            width='very wide'
            style={{
              backgroundColor: 'white',
              zIndex: '5',
              paddingRight: '9%'
            }}
          >
            <Image src={logo} fluid/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <a
                href='http://www.anavharris.com/district-tree' target='_blank'
                style={{color: '#edc4bc'}}
              >
                More info
              </a>
          </Sidebar>
    )
  }

}

export default About
