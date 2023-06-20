import { Link } from 'react-router-dom';
import "./Header.scss";

import logo from "../../assets/images/logo.jpg"

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-container">
                <Link to="/">
                    <img src={logo} className="header__logo-img" alt="Little Links Logo"></img>
                </Link>
                <h2>Little Links</h2>
                <div className='header__menu-icon'></div>
            </div>

            <div>

            </div>

            {/* <div className="header__search-container">

                <form className="header__searchbar-form">
                    <button type="submit" className="header__searchbar-icon"></button>
                    <input type="text" className="header__searchbar-input" id="search-bar" name="search-bar" placeholder="Search" />
                </form> */}

                {/* <img className="user-avatar header__avatar-order" src={userAvatar} alt="user profile avatar"></img> */}

                {/* <Link to="/upload" className="header__upload-button">
                    UPLOAD
                </Link> */}
            </div>
        </header>
    );
};

export default Header;