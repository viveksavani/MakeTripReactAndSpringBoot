import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import UserDetailsService from '../../api/UserDetailsService';

function HeaderComponent() {

    let userloggedIn = UserDetailsService.isUserLoggedIn();
    console.log(userloggedIn)

    let email = UserDetailsService.getUserEmail()
    console.log(email)



    return (
        <div className="Header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">MakeTrip</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                           {userloggedIn && <Link className="nav-link" to={`/welcome/${email}`}>Home <span className="sr-only">(current)</span></Link>}
                        </li>
                        <li className="nav-item">
                        {userloggedIn && <Link className="nav-link" to="/flights">Flights Details</Link>}
                        </li>
                        <li className="nav-item">
                       {!userloggedIn && <Link className="nav-link" to="/signup">Singup</Link>}
                        </li>
                        <li className="nav-item">
                       {!userloggedIn && <Link className="nav-link" to="/signin">Signin</Link>}
                        </li>
                        <li className="nav-item">
                       {userloggedIn && <Link className="nav-link" to="/logout" onClick={UserDetailsService.logout}>Logout</Link>}
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default HeaderComponent