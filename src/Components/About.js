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
                District Tree .
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
