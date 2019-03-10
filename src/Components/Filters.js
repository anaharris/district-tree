import React, {Component} from 'react'
import {Sidebar, Segment} from 'semantic-ui-react'

class Filters extends Component {
  state = {
    visible: false
  }

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
            paddingRight: '8%'
          }}
          >
          </Sidebar>
    )
  }

}

export default Filters
