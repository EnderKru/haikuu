import AuthDetails from "../../components/auth/authDetails";
import SignIn from "../../components/auth/signIn";
import Header from "../../components/templates/header";
import './signInPage.scss'
import logo from '../../assets/images/img1.svg'
import { NavLink } from "react-router-dom";


export function SignInPage(){
    return(
        <div className="sign-in">
            <NavLink to='/'>
            <img className="logo" src={logo}/>
            </NavLink>

            <div>
                <SignIn/>
                {/* <AuthDetails/> */}
            </div>
        </div>

    )
}