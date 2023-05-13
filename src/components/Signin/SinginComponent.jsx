import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";
import UserDetailsService from "../../api/UserDetailsService";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogTitle } from "@mui/material";


function SinginComponent() {

    const [openDialog, handleDisplay] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [showSuccessMessage, setshowSuccessMessage] = useState(false);
    const [hasLoginFailed, sethasLoginFailed] = useState(false);
    const navigate = useNavigate();

    const handleSignIn = (event) => {
        event.preventDefault();
        console.log("signin clicked")

        UserDetailsService.loginUser(email, password).then(
            (response) => {
                UserDetailsService.registerSuccessFul(email, password)
                openDialogBox()
                
            }
        ).catch(() => {
            console.log("failed")
            setshowSuccessMessage(false)
            sethasLoginFailed(true)
        })

    }

    const handleClose = () => {
        handleDisplay(false);
        navigate(`/welcome/${email}`);
    };

    const openDialogBox = () => {
        handleDisplay(true);
    };
    const dialogStyle = {
        padding: "20px",
    };
   


    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }


    return (


        <div className="singin">
            <section className="text-center">
                {hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {showSuccessMessage && <div>Login Succesfull</div>}
                <Dialog onClose={handleClose} open={openDialog}>
                    <DialogTitle> Login </DialogTitle>
                    <h3 style={dialogStyle}>
                        User Login SuccessFully with Email {email}
                    </h3>
                    <button className="btn btn-warning" onClick = {handleClose}>
                  Close 
               </button>
                </Dialog>

            
                <div className="card-body py-5 px-md-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="fw-bold mb-5">Sign In now</h2>
                            <form onSubmit={handleSignIn} >
                                <div className="row">



                                    <div className="form-outline mb-4">
                                        <input
                                            type="email"
                                            id="form3Example3"
                                            className="form-control"
                                            value={email}
                                            onChange={handleEmailChange}
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
                                        />
                                        <label
                                            className="form-label"
                                            htmlFor="form3Example4"
                                        >
                                            Password
                                        </label>
                                    </div>

                                </div>


                                <button type="submit" className="btn btn-primary btn-block mb-4">Sign In</button>


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

export default SinginComponent;