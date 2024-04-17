import About from '../components/About';
import Experience from '../components/Experience';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import Tech from '../components/Tech';
import './Home.css'
export default function Home() {
    return (
        <div className='home-container'>
            <div className='main-container'>
                <Intro />
                <hr className='spacer'></hr>
                <About />
                <hr className='spacer'></hr>
                <Tech />
                <hr className='spacer'></hr>
                <Experience />
                <hr className='spacer'></hr>
                <Projects />
                <hr className='spacer'></hr>
                <div className='footer'></div>
            </div>
        </div>
    );
}