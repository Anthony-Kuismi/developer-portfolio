export default function ProjectCard({title, description, link}){
    return(
        <div className='scroll-container'>
            <h1>{title}</h1>
            <p className='delayed'>{description}</p>
            <a href={link}>Link</a>
        </div>
    ); 
}