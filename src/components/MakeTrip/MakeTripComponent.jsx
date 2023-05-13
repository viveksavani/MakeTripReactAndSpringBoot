import { BrowserRouter, Route, Routes } from "react-router-dom"
import HeaderComponent from "../Header/HeaderComponent"
import SingupComponent from "../Singup/SingupComponent"
import SinginComponent from "../Signin/SinginComponent"
import LogoutComponent from "../logout/LogoutComponent"
import WelcomeComponent from "../welcome/WelcomeComponent"
import ErrorComponent from "../error/ErrorComponent"
import withNavigation from "../withparamsnavigation/WithNavigation"
import withParams from "../withparamsnavigation/WithParams"
import AuthenticatedRoute from "../AuthenticateRoute/AuthenticatedRoute"
import FlightComponent from "../flights/FlightComponent"
import FooterComponent from "../footer/FooterComponent"

function MakeTripComponent() {

    const SigninComponentWithNavigation = withNavigation(SinginComponent);

    const WelcomeComponentWithParams = withParams(WelcomeComponent);

    const HeaderComponentWithNavigation = withNavigation(HeaderComponent);

    return (

        <>
            <BrowserRouter>
                <HeaderComponentWithNavigation />
                <Routes>

                    <Route path="/" element={<SingupComponent />} />
                    <Route path="/signup" element={<SingupComponent />} />
                    <Route path="/signin" element={<SigninComponentWithNavigation />} />
                    <Route path="/flights" element={
                        <AuthenticatedRoute>
                            <FlightComponent />
                            </AuthenticatedRoute>
                    } />
                    <Route path="/logout" element={
                        <AuthenticatedRoute>
                            <LogoutComponent />
                        </AuthenticatedRoute>
                    } />
                    <Route path="/welcome/:email" element={
                        <AuthenticatedRoute>
                            <WelcomeComponentWithParams />
                        </AuthenticatedRoute>
                    } />
                    <Route path="*" element={<ErrorComponent />} />

                </Routes>
                <FooterComponent/>
            </BrowserRouter>
        </>
    )
}

export default MakeTripComponent