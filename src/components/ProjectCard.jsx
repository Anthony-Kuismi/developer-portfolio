import './ProjectCard.css'
export default function ProjectCard({title, description, link}){
    return(
        <div className='card-container'>
            <h1>{title}</h1>
            <p>{description}</p>
            <a href={link}>Link</a>
        </div>
    ); 
}