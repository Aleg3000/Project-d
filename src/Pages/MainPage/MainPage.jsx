import cl from './MainPage.module.css'
import gsap from 'gsap'
import MainCards from '../../Components/MainCards/MainCards';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { TransitionDiv, useCustomTransition } from "../../hooks/useCustomTransition"

const MainPage = () => {

    const navigate = useNavigate()

    const cardsContainer = useRef()
    const title = useRef()
    const about = useRef()
    const transitionDiv = useRef()

    const transition = useCustomTransition(transitionDiv)

    useEffect(() => {
        gsap.registerPlugin()
        window.scrollTo(0, 0)
        document.body.style.overflowY = 'hidden'

        const tl = gsap.timeline()

        tl.to(cardsContainer.current, {opacity: 1, duration: 1, delay: 0.5})
        tl.to(title.current, {opacity: 1})
        tl.to(about.current, {opacity: 1, 
            onStart: () => about.current.style.display = 'block'
        })

        return () => document.body.style.overflowY = 'auto'
    })

    const toAbout = () => {
        transition().finally(() => navigate('about'))
    }

    return (
        <>
            <main className={cl.main}>
                <h1 ref={title} className={cl.mainTitle}>Project-d</h1>
                <MainCards container={cardsContainer} />
                <div ref={about} onClick={toAbout} className={cl.aboutBtn}>About us</div>
            </main>
            <TransitionDiv color='#F2F2F2' ref={transitionDiv} />
        </>
        
    )
}

export default MainPage