import React, {Component} from 'react'
import {Sidebar, Segment, Form, Header, Divider, Radio, Button} from 'semantic-ui-react'
import trees from '../data/trees.js'
import treesSciNames from '../data/sciName.js'

class Filters extends Component {
  state = {
    condition: '',
    ward: '',
    commonName: '',
    sciName: ''
  }


// callbacks
  handleCondition = (e, { value }) => this.setState({ condition: value })

  handleWard = (e, { value }) => this.setState({ ward: value })

  handleCommonName = (e, {value}) => this.setState({commonName: value})

  handleSciName = (e, {value}) => this.setState({sciName: value})

  handleReset = (e) => {
    this.setState({ condition: '', ward: '', commonName: '', sciName: ''})
    this.props.resetFilters()
    this.props.closeFilters()
  }

  handleSubmit = (e) => {
    this.props.handleFilters(this.state.condition, this.state.ward, this.state.commonName, this.state.sciName)
    this.props.closeFilters()
  }


  render() {
    const condition = this.state.condition
    const ward = this.state.ward
    const commonName = this.state.commonName
    const sciName = this.state.sciName

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
            >Filter trees</Header>
            <Divider/>
            <p>Select ward, condition, common name or scientific name, and click on <strong>Filter</strong>. To see more details zoom in. </p>
            <p>To reset the filters click <strong>Reset</strong>.</p>
            <Form size='large' onSubmit={this.handleSubmit}>
              <p style={{fontWeight: '700'}}>Ward</p>
              <Form.Group inline>
                <Form.Field
                  control={Radio}
                  label='1'
                  value='1'
                  checked={ward === '1'}
                  onChange={this.handleWard}
                />
                <Form.Field
                  control={Radio}
                  label='2'
                  value='2'
                  checked={ward === '2'}
                  onChange={this.handleWard}
                />
                <Form.Field
                  control={Radio}
                  label='3'
                  value='3'
                  checked={ward === '3'}
                  onChange={this.handleWard}
                />
                <Form.Field
                  control={Radio}
                  label='4'
                  value='4'
                  checked={ward === '4'}
                  onChange={this.handleWard}
                />
              </Form.Group>
              <Form.Group inline>
                <Form.Field
                  control={Radio}
                  label='5'
                  value='5'
                  checked={ward === '5'}
                  onChange={this.handleWard}
                />
                <Form.Field
                  control={Radio}
                  label='6'
                  value='6'
                  checked={ward === '6'}
                  onChange={this.handleWard}
                />
                <Form.Field
                  control={Radio}
                  label='7'
                  value='7'
                  checked={ward === '7'}
                  onChange={this.handleWard}
                />
                <Form.Field
                  control={Radio}
                  label='8'
                  value='8'
                  checked={ward === '8'}
                  onChange={this.handleWard}
                />
              </Form.Group>
              <p style={{fontWeight: '700'}}>Condition</p>
              <Form.Group inline>
                <Form.Field
                  control={Radio}
                  label='Poor'
                  value='Poor'
                  checked={condition === 'Poor'}
                  onChange={this.handleCondition}
                />
                <Form.Field
                  control={Radio}
                  label='Fair'
                  value='Fair'
                  checked={condition === 'Fair'}
                  onChange={this.handleCondition}
                />
                <Form.Field
                  control={Radio}
                  label='Good'
                  value='Good'
                  checked={condition === 'Good'}
                  onChange={this.handleCondition}
                />
                <Form.Field
                  control={Radio}
                  label='Excellent'
                  value='Excellent'
                  checked={condition === 'Excellent'}
                  onChange={this.handleCondition}
                />
              </Form.Group>
              <p style={{fontWeight: '700'}}>Common Name*</p>
              <Form.Group widths='equal'>
                <Form.Select
                  fluid options={trees}
                  value = {commonName}
                  placeholder='Common Name'
                  onChange={this.handleCommonName}
                />
              </Form.Group>
              <p style={{fontWeight: '700'}}>Scientific Name*</p>
              <Form.Group widths='equal'>
                <Form.Select
                  fluid options={treesSciNames}
                  value = {sciName}
                  placeholder='Scientific Name'
                  onChange={this.handleSciName}
                />
              </Form.Group>
              <p>*select common name <strong>or</strong> scientific name</p>
              <Button type='submit' style={{backgroundColor: '#3a5344', color: 'white'}}>
                Filter
              </Button>
              <Button onClick={this.handleReset}>
                Reset
              </Button>
            </Form>
          </Sidebar>
    )
  }

}

export default Filters
