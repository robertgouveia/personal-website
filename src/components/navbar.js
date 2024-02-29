import {NavLink} from "react-router-dom";
import '../modules/navbar.modules.css'

const onClickHandler = () => {
    const navList = document.querySelector('.nav_list')
    navList.classList.toggle('active');
}

const Navbar = () => {
    return (
        <nav>
            <section>
                <div>
                    <h1>ROBGEE</h1><span>®</span>
                </div>
                <i onClick={onClickHandler} className='fa-solid fa-bars'></i>
            </section>
            <ul className='nav_list'>
                <NavLink to={'/'} className={({isActive}) => `nav_item ${isActive ? 'active' : ''}`}>Projects</NavLink>
                <NavLink to={'/about'} className={({isActive}) => `nav_item ${isActive ? 'active' : ''}`}>About</NavLink>
                <NavLink to={'/contact'} className={({isActive}) => `nav_item ${isActive ? 'active' : ''}`}>Contact</NavLink>
            </ul>
        </nav>

    )
}

export default Navbar;