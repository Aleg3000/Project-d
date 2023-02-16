import cl from './AudiPage.module.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { TransitionDiv, useCustomTransition } from "../../hooks/useCustomTransition"
import { useMatchMedia } from '../../hooks/useMatchMedia'

const AudiPage = () => {
    const navigate = useNavigate()

    const isMobile = useMatchMedia()

    const transitionDiv = useRef()

    const transition = useCustomTransition(transitionDiv)

    const toMain = () => {
        transition().finally(() => navigate('/'))
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <header className={cl.welcomeSection}>
                <div onClick={toMain} className={cl.titleBtn}>Project-d</div>
                <h2>AUDI QUATTRO DAYS,<span> Key visual</span></h2>
            </header>
            <main className={cl.main}>
                <div className={cl.audi1}></div>
                <div className={cl.audi2}></div>
                <div className={cl.audi3}></div>
            </main>
            <footer className={cl.footer}>
            <h2 onClick={() => navigate('/font')}>NEXT PROJECT</h2>
            </footer>
            <TransitionDiv color={isMobile ? '#E5291F' : '#0F1010'} ref={transitionDiv} />
        </>
        
        
    )
}

export default AudiPage