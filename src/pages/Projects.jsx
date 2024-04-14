import './Projects.css'
import Carousel from '../components/Carousel/Carousel';

export default function Projects(){

    return(
        <div className='projects-container'>
            <h1 className='page-title'>Projects</h1>
            <Carousel/>
        </div>
    );
}