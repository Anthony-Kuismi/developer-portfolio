import './Navbar.css'
import { NavbarLink } from './NavbarLink';

export default function Navbar(){
    return (
        <div className='container'>
            <nav className='nav'>
                <h1 className='site-title'>Anthony Kuismi</h1>
                <ul>
                    <ion-icon name='home'></ion-icon>
                    <NavbarLink to='/developer-portfolio/'>Home</NavbarLink>
                    <ion-icon name='folder'></ion-icon>
                    <NavbarLink to='/developer-portfolio/projects/'>Projects</NavbarLink>
                    <ion-icon name='information-circle'></ion-icon>
                    <NavbarLink to='/developer-portfolio/about-me/'>About Me</NavbarLink>
                    <ion-icon name='logo-linkedin'></ion-icon>
                    <a href='https://www.linkedin.com/in/anthony-kuismi' target='_blank'>LinkedIn</a>
                    <ion-icon name='logo-github'></ion-icon>
                    <a href='https://github.com/Anthony-Kuismi' target='_blank'>GitHub</a>
                </ul>
            </nav>
            <hr/>
        </div>
    );
}