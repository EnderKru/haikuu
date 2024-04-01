import SignUp from "../../components/auth/signUp";
import './signUpPage.scss'
import logo from '../../assets/images/img1.svg'
import { NavLink } from "react-router-dom";

export function SignUpPage(){
    return(
            <div className="sign-up">
            <NavLink to='/'>
            <img className="logo" src={logo}/>
            </NavLink>
            <div>
                <SignUp/>
                {/* <AuthDetails/> */}
            </div>
        </div>
    )
}