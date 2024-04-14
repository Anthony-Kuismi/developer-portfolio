import { useEffect } from 'react';
import './ScrollSection.css'
import { useRef } from 'react';

export default function ScrollSection({children}){
    const sectionRef = useRef(null);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }else{
                entry.target.classList.remove('show');
            }
        }) 
    })

    useEffect(()=>{
        const element = sectionRef.current;
        observer.observe(element);
    });

    return(
        <section ref={sectionRef} className='hidden'>
            {children}
        </section>
    );
}