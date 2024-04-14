import './Navbar.css'
import { NavbarLink } from './NavbarLink';

export default function Navbar(){
    return (
        <div className='container'>
            <nav className='nav'>
                <h1 className='site-title'>Anthony Kuismi</h1>
                <ul>
                    <NavbarLink to='/developer-portfolio/'>Home</NavbarLink>
                    <NavbarLink to='/developer-portfolio/projects/'>Projects</NavbarLink>
                    <NavbarLink to='/developer-portfolio/about-me/'>About Me</NavbarLink>
                </ul>
            </nav>
            <hr/>
        </div>
    );
}