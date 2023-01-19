import cl from './MainPage.module.css'
import MainCards from '../../Components/MainCards/MainCards';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import About from '../../Components/About/About';

const MainPage = () => {
    const aboutContainer = useRef();
    const [isOpen, setOpen] = useState(false);

    const toggleAbout = () => {
        if (isOpen) {
            gsap.to(aboutContainer.current, {
                bottom: '-45rem',
                duration: 1,
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
        <main className={cl.main}>
        <h1 className={cl.mainTitle}>Project-d</h1>
        <MainCards />
        <div onClick={toggleAbout} className={cl.aboutBtn}>About us</div>
        <About refA={aboutContainer} />
    </main>
    )


}

export default MainPage