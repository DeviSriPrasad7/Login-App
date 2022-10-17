// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {
    isLoggedIn: true,
  }

  loggedStatus = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="login-app-container">
        <div className="sub-container">
          <Message msg={isLoggedIn} />
          {isLoggedIn ? (
            <Login login={this.loggedStatus} />
          ) : (
            <Logout logout={this.loggedStatus} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
