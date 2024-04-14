import './Navbar.css'
import { NavbarLink } from './NavbarLink';

export default function Navbar() {
    return (
        <div className='container'>
            <nav className='nav'>
                <h1 className='site-title'>Anthony Kuismi</h1>
                <ul>
                    <div className='nav-link'>
                        <ion-icon name='home'></ion-icon>
                        <NavbarLink to='/developer-portfolio/'>Home</NavbarLink>
                    </div>
                    <div className='nav-link'>
                        <ion-icon name='folder'></ion-icon>
                        <NavbarLink to='/developer-portfolio/projects/'>Projects</NavbarLink>
                    </div>
                    <div className='nav-link'>
                        <ion-icon name='information-circle'></ion-icon>
                        <NavbarLink to='/developer-portfolio/about-me/'>About Me</NavbarLink>
                    </div>
                    <div className='nav-link'>
                        <ion-icon name='logo-linkedin'></ion-icon>
                        <a href='https://www.linkedin.com/in/anthony-kuismi' target='_blank'>LinkedIn</a>
                    </div>
                    <div className='nav-link'>
                        <ion-icon name='logo-github'></ion-icon>
                        <a href='https://github.com/Anthony-Kuismi' target='_blank'>GitHub</a>
                    </div>
                </ul>
            </nav>
            <hr></hr>
        </div>
    );
}