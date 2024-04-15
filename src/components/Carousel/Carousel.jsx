import useEmblaCarousel from 'embla-carousel-react';
import ProjectCard from '../ProjectCard/ProjectCard';
import Autoplay from 'embla-carousel-autoplay';
import './Carousel.css'
export default function Carousel() {
    const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay({playOnInit: true, delay: 10000})])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <ProjectCard title='Food Tracking App' link='https://google.com'
                        description='Main project worked on during software engineering. The app helps users track their food.'
                    />
                </div>
                <div className="embla__slide">
                    <ProjectCard title='Rocketry App' link='https://google.com'
                        description='Description.'
                    />
                </div>
                <div className="embla__slide">
                    <ProjectCard title='Sorting Algorithms' link='/developer-portfolio/projects/sorting/'
                        description='Heap Sort, Quick Sort(regular and random), Merge Sort'
                    />
                </div>
                <div className='embla__slide'>
                    <ProjectCard title='Fibonacci Heaps' link='https://google.com'
                        description='Description.'
                    />
                </div>
                <div className='embla__slide'>
                    <ProjectCard title='Trees' link='https://google.com'
                        description='Red-Black Trees, Huffman Tree file Compression.'
                    />
                </div>
                <div className='embla__slide'>
                    <ProjectCard title='Graph Algorithms' link='https://google.com'
                        description='Minimum Spanning Trees and Dijkstra.'
                    />
                </div>
            </div>
        </div>
    )
}