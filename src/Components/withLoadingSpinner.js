import React, {Component} from 'react'
import logo from './loading-screen.png'

function LoadingMessage() {
  return (
    <div id='loading-background'>
      <img id='loading-logo' src={logo} alt='District Tree logo'/>
    </div>
  )
}

function withLoadingSpinner(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        loading: true
      }
    }

    async componentDidMount() {
      try {
        setTimeout(() => {
         this.setState({
           loading: false,
         });
       }, 2000)
     } catch(err) {
       console.log(err)
       this.setState({ loading: false })
     }
    }

    render() {
      if (this.state.loading) return LoadingMessage()
      return <WrappedComponent {...this.props}/>
    }

  }
}

export default withLoadingSpinner
