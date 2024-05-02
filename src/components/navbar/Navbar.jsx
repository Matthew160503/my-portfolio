import BtnDarkMode from "../btnDarkMode/BtnDarkMode";

import { NavLink } from "react-router-dom";

const Navbar = () => {

    const linkActive = "nav-list__link nav-list__link--active";
    const link = "nav-list__link"; 

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to='/' className="logo">
                        <strong>My Portfolio</strong>
                    </NavLink>

                    <BtnDarkMode />

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to='/' className={({isActive}) => {
                                return isActive ? linkActive : link
                            }}>
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink to='/projects' className={({isActive}) => {
                                return isActive ? linkActive : link
                            }}>
                                Projects
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink to='/contacts' className={({isActive}) => {
                                return isActive ? linkActive : link
                            }}>
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;