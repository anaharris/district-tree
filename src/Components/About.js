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
                District Tree is an interactive map of street trees in Washington, D.C. that uses an <a
                  href='http://opendata.dc.gov/datasets/f6c3c04113944f23a7993f2e603abaf2_23'
                  target='_blank'
                  rel='noopener'
                  style={{color: '#e4a3a0'}}
                >open dataset</a> curated by DDOT's Urban Forestry Division of the DC city government.
              </p>
              <p>
                DC is well-known for cherry blossoms but the rest of the city has lots of wonderful greenery as well. Its streets are home to approximately 200,000 trees that have been an essential part of the city since Pierre L'Enfant's original design, drafted in 1791.
              </p>
              <a
                href='http://www.anavharris.com/projects/district-tree'
                target='_blank'
                rel='noopener'
                style={{color: '#edc4bc'}}
              >
                More info
              </a>
          </Sidebar>
    )
  }

}

export default About
