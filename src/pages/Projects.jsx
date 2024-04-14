import './Projects.css'
import ScrollSection from '../components/ScrollSection';
import ProjectCard from '../components/ProjectCard';

export default function Projects(){

    return(
        <div className='projects-container'>
            <h1 className='page-title'>Projects</h1>
            <ScrollSection>
                <ProjectCard title = 'Food Tracking App' link='https://google.com'
                description='Main project worked on during software engineering. The app helps users track their food.' 
                />
            </ScrollSection>
            <ScrollSection>
                <ProjectCard title = 'Rocketry App' link='https://google.com'
                description='Description.' 
                />
            </ScrollSection>
            <ScrollSection>
                <ProjectCard title = 'Sorting Algorithms' link='https://google.com'
                description='Heap Sort, Quick Sort(regular and random), Merge Sort' 
                />
            </ScrollSection>
            <ScrollSection>
                <ProjectCard title = 'Fibonacci Heaps' link='https://google.com'
                description='Description.' 
                />
            </ScrollSection>
            <ScrollSection>
                <ProjectCard title = 'Trees' link='https://google.com'
                description='Red-Black Trees, Huffman Tree file Compression.' 
                />
            </ScrollSection>
            <ScrollSection>
                <ProjectCard title = 'Graph Algorithms' link='https://google.com'
                description='Minimum Spanning Trees and Dijkstra.' 
                />
            </ScrollSection>


        </div>
    );
}