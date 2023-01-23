import cl from './About.module.css'
import gsap from 'gsap';
import { useRef, useState } from 'react';

const About = () => {

    const aboutContainer = useRef();

    const [isOpen, setOpen] = useState(false);

    const toggleAbout = () => {
        if (isOpen) {
            gsap.to(aboutContainer.current, {
                bottom: '-45rem',
                duration: 0.6,
                overwrite: true,
                onComplete: () => aboutContainer.current.style.display = 'none'
            })
        } else {
            aboutContainer.current.style.display = 'flex';
            gsap.to(aboutContainer.current, { 
                bottom: '50vh',
                ease: "elastic.out(1, 0.7)", 
                duration: 0.6,
                overwrite: true,
                
            })
        }
        setOpen((state) => !state)
    }

    return (
        <>
            <div onClick={toggleAbout} className={cl.aboutBtn}>About us</div>
            <div ref={aboutContainer} className={cl.aboutContainer}>
                <div className={cl.aboutCard + ' ' + cl.active}>
                    <div>About us</div>
                </div>
                <div className={cl.aboutCard}>
                    <div>Contacts</div>
                </div>
            </div>
        </>
    )
}

export default About