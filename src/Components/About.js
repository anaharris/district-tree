import React, {Component} from 'react'
import {Sidebar, Segment, Container, Divider} from 'semantic-ui-react'

class About extends Component {

  render() {
    return (
          <Sidebar
            as={Container}
            animation='overlay'
            icon='labeled'
            direction='right'
            visible={this.props.visible}
            width='very wide'
            style={{
              backgroundColor: 'white',
              zIndex: '5',
              paddingRight: '8%'
            }}
          >
          <b>District Tree</b>
          <Divider />
          </Sidebar>
    )
  }

}

export default About
