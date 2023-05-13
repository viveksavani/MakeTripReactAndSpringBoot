import axios from "axios"

class UserDetailsService{

    createUserDetails(user){
        return axios.post("http://localhost:8080/userDetails",user)
    }

    loginUser(email,password){
        return axios.get(`http://localhost:8080/login/${email}/${password}`)
    }

    registerSuccessFul(email,password){
        console.log("RegisterSuccessFull")
        sessionStorage.setItem('AuthenticateUser',email)
    }

    
    logout(){
        sessionStorage.removeItem('AuthenticateUser')
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('AuthenticateUser')
        
        if(user===null)
        {
            return false
        }
        return true
        
    }

    getUserEmail(){

       let email =  sessionStorage.getItem("AuthenticateUser")

       if(email===null)return ''
       else return email
    }
}

export default new UserDetailsService()