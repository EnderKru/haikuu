import { NavLink } from 'react-router-dom';
import img1 from '../../assets/images/img1.svg';
import React, { useContext } from 'react';
import './header.scss';
import userIcon from '../../assets/images/user-icon.svg';
import { UserContext, userSignOut } from '../../App';

function Header() {
    const [user, setUser] = useContext(UserContext); // Используйте useContext напрямую
    const toggleUserState = () => {
        setUser((prevUser) => !prevUser);
    };

    const handleLogOut = () => {
        userSignOut();
        ; // Перезагрузите страницу после выхода
    };

    return (
        <header className={'header'}>
            <NavLink to='/' className={'header__logo'}>
                <img src={img1} alt="logo" />
            </NavLink>
            <div className="custom-tooltip">
                <img src={userIcon} alt="Mini Photo" className="mini-photo" id="person" />
                {user ? (
                    <div className="tooltiptext">
                        <NavLink to='/profile'>
                            <a href='' className='log-in'>profile</a>
                        </NavLink>
                        <NavLink to="/">
                            <a href='' onClick={handleLogOut} className='log-in'>log out</a>
                        </NavLink>
                    </div>
                ) : (
                    <div className="tooltiptext">
                        <NavLink to='/registration'>
                            <a href='' className='log-in'>sign up</a>
                        </NavLink>
                        <NavLink to='/login'>
                            <a href='' className='log-in'>log in</a>
                        </NavLink>
                    </div>
                )}

            </div>
        </header>
    );
}

export default Header;
