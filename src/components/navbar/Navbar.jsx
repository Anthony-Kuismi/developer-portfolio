import './Navbar.css'
import { Link } from 'react-router-dom';
import { NavbarLink } from './NavbarLink';

export default function Navbar(){
    return (
        <div className='container'>
            <nav className='nav'>
                <Link to='/developer-portfolio/' className='site-title'>Home</Link>
                <ul>
                    <NavbarLink to='/developer-portfolio/projects/'>Projects</NavbarLink>
                    <NavbarLink to='/developer-portfolio/about-me/'>About Me</NavbarLink>
                </ul>
            </nav>
            <hr/>
        </div>
    );
}