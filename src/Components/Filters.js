import React, {Component} from 'react'
import {Sidebar, Segment, Form, Header, Divider, Radio} from 'semantic-ui-react'

class Filters extends Component {
  state = {
    visible: false,
    value: '',
    ward: 1
  }

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const value = this.state.value
    const options = [
      {key: 1, text: 1, value: 1},
      {key: 2, text: 2, value: 2},
      {key: 3, text: 3, value: 3},
      {key: 4, text: 4, value: 4},
      {key: 5, text: 5, value: 5},
      {key: 6, text: 6, value: 6},
      {key: 7, text: 7, value: 7},
      {key: 8, text: 8, value: 8}
    ]

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
            <Header
              as='h1'
              size='huge'
              style={{color: '#3a5344'}}
            >
              Filter trees
            </Header>
            <Divider/>
            <Form size='large'>
              <p style={{fontWeight: '700'}}>Ward</p>
              <Form.Group widths='2'>
                <Form.Select fluid options={options} placeholder='Ward'/>
              </Form.Group>
              <p style={{fontWeight: '700'}}>Condition</p>
              <Form.Group inline>
                <Form.Field
                  control={Radio}
                  label='Poor'
                  value='Poor'
                  checked={value === 'Poor'}
                  onChange={this.handleChange}
                />
                <Form.Field
                  control={Radio}
                  label='Fair'
                  value='Fair'
                  checked={value === 'Fair'}
                  onChange={this.handleChange}
                />
                <Form.Field
                  control={Radio}
                  label='Good'
                  value='Good'
                  checked={value === 'Good'}
                  onChange={this.handleChange}
                />
                <Form.Field
                  control={Radio}
                  label='Excellent'
                  value='Excellent'
                  checked={value === 'Excellent'}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form>
          </Sidebar>
    )
  }

}

export default Filters
