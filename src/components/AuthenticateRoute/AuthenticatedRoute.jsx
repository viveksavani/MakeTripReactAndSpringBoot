import { Navigate } from "react-router-dom"
import { Component } from "react"
import UserDetailsService from "../../api/UserDetailsService"

class AuthenticatedRoute extends Component {
    render() {
      if (UserDetailsService.isUserLoggedIn()) {
        return {...this.props.children}
      } else {
        return <Navigate to="/signin" />
      }
    }
  }
  
  export default AuthenticatedRoute