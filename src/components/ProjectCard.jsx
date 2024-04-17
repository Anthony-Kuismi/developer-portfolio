import './ProjectCard.css'
import { Link } from 'react-router-dom';
export default function ProjectCard({title, link, children}){
    return(
        <div className='project'>
            <div className='project-title'>{title}</div>
            <div className='tech-stack'>Tech Stack</div>
            {children}
            <Link className='project-link' to={link}>View Project</Link>
        </div>
    );
}