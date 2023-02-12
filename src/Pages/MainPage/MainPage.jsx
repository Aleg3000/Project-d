import cl from './MainPage.module.css'
import gsap from 'gsap'
import MainCards from '../../Components/MainCards/MainCards';
// import About from '../../Components/About/About';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
        document.body.style.overflowY = 'hidden'

        return () => document.body.style.overflowY = 'auto'
    })

    const toAbout = () => {
        title.current.style.opacity = 0
        about.current.style.opacity = 0
        
        transitionDiv.current.style.display = 'block'
        gsap.to(transitionDiv.current, {
            yPercent: -100,
            duration: 0.8,
            onComplete: () => navigate('about')
        })
        gsap.to(cardsContainer.current, {
            yPercent: -100,
            duration: 0.8,
            
        })
    }

    const cardsContainer = useRef()
    const title = useRef()
    const about = useRef()
    const transitionDiv = useRef()

    return (
        <main className={cl.main}>
            <h1 ref={title} className={cl.mainTitle}>Project-d</h1>
            <MainCards container={cardsContainer} />
            <div ref={about} onClick={toAbout} className={cl.aboutBtn}>About us</div>
            <div ref={transitionDiv} className={cl.transitionDiv}></div>
            {/* <About /> */}
        </main>
    )
}

export default MainPage