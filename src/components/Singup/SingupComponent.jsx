import { useState } from 'react';
import { faFacebookF, faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserDetailsService from '../../api/UserDetailsService';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogTitle } from '@mui/material';



function SingupComponent() {
    const [openDialog, handleDisplay] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({ firstName: '', lastName: '', email: '', password: '' })
    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();
        // code for signing up user
        console.log(user)

        UserDetailsService.createUserDetails(user).then(
            () => {

               openDialogBox()
                
            }
        ).catch(() => {
            console.log("Failed")
        })


    };

    

    const handleClose = () => {
       handleDisplay(false);
       navigate("/signin")
    };
 
    const openDialogBox = () => {
       handleDisplay(true);
      
    };
    const dialogStyle = {
       padding: "20px",
    };
    const buttonStyle = {
       width: "10rem",
       fontsize: "1.5rem",
       height: "2rem",
       padding: "5px",
       borderRadius: "10px",
       backgroundColor: "green",
       color: "White",
       border: "2px solid yellow",
    };




    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
        setUser((prevUser) => ({ ...prevUser, firstName: event.target.value }));
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
        setUser((prevUser) => ({ ...prevUser, lastName: event.target.value }));
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setUser((prevUser) => ({ ...prevUser, email: event.target.value }));
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setUser((prevUser) => ({ ...prevUser, password: event.target.value }));
    };



    return (
        <div className="signup">
            <Dialog onClose = {handleClose} open = {openDialog}>
            <DialogTitle> Registraion </DialogTitle>
            <h3 style = {dialogStyle}>
            User Registerd SuccessFully with Email {email} .
            Please Sign In
            </h3>
            <button className="btn btn-warning" onClick = {handleClose}>
                  Close 
               </button>
         </Dialog>
            <section className="text-center">
                <div
                    className="p-5 bg-image"
                    style={{
                        backgroundImage:
                            'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)',
                        height: '300px',
                    }}
                ></div>

                <div className="card mx-4 mx-md-5 shadow-5-strong"
                    style={{
                        marginTop: '-100px',
                        background: 'hsla(0, 0%, 100%, 0.8)',
                        backdropFilter: 'blur(30px)',
                    }}
                />
                <div className="card-body py-5 px-md-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="fw-bold mb-5">Sign up now</h2>
                            <form onSubmit={handleSignUp} >
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="form3Example1"
                                                className="form-control"
                                                value={firstName}
                                                onChange={handleFirstNameChange}
                                                required
                                            />
                                            <label
                                                className="form-label"
                                                htmlFor="form3Example1"
                                            >
                                                First name
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="form3Example2"
                                                className="form-control"
                                                value={lastName}
                                                onChange={handleLastNameChange}
                                                required
                                            />
                                            <label
                                                className="form-label"
                                                htmlFor="form3Example2"
                                            >
                                                Last name
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-outline mb-4">
                                    <input
                                        type="email"
                                        id="form3Example3"
                                        className="form-control"
                                        value={email}
                                        onChange={handleEmailChange}
                                        required
                                    />
                                    <label
                                        className="form-label"
                                        htmlFor="form3Example3"
                                    >
                                        Email address
                                    </label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        id="form3Example4"
                                        className="form-control"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        required
                                    />
                                    <label
                                        className="form-label"
                                        htmlFor="form3Example4"
                                    >
                                        Password
                                    </label>
                                </div>




                                <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>
                                
                                <div className="text-center">
                                    <p>or sign up with:</p>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <FontAwesomeIcon icon={faGoogle} />
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )

}

export default SingupComponent;