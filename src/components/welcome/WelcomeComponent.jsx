import { Link, useParams } from "react-router-dom";

function WelcomeComponent(){
    const { email } = useParams();

    return (

        <>
        <h1>Welcome!</h1>
        <div className="container">
            Welcome to {email} .you can manage your flights <Link to="/flights">here</Link> 
        </div>
        </>
    )

}

export default WelcomeComponent;