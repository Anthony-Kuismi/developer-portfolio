import './ProjectCard.css'
import { Link } from 'react-router-dom';
import { TechStack } from './TechStack';

export default function ProjectCard({ title, link, children, tech }) {
    return (
        <div className='project'>
            <div className='project-title'>{title}</div>
            <TechStack
                javascript={tech.javascript}
                css={tech.css}
                html={tech.html}
                react={tech.react}
                dart={tech.dart}
                flutter={tech.flutter}
                firebase={tech.firebase}
                heroku={tech.heroku}
                vite={tech.vite}
            />
            <div className='content'>
                {children}
            </div>
            <Link className='project-link' to={link}>View Project</Link>
        </div>
    );
}