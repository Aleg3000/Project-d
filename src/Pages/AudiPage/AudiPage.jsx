import cl from './AudiPage.module.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { TransitionDiv, useCustomTransition } from "../../hooks/useCustomTransition"

const AudiPage = () => {
    const navigate = useNavigate()

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
            <TransitionDiv ref={transitionDiv} />
        </>
        
        
    )
}

export default AudiPage