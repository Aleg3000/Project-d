import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import cl from './FontPageMobile.module.css'
import { TransitionDiv, useCustomTransition } from "../../hooks/useCustomTransition"
import { useTransitionNext } from '../../hooks/useTransitionNext'


const FontPageMobile = () => {
    const navigate = useNavigate()

    const transitionDiv = useRef()

    const transition = useCustomTransition(transitionDiv)

    const toMain = () => {
        transition().finally(() => navigate('/'))
    }

    const [nextProject, toNextProject] = useTransitionNext('hookahCatalog')

    useEffect(() => window.scrollTo(0, 0), [])

    return (
        <><div className={cl.container}>
            <header className={cl.welcomeSection}>
                <div onClick={toMain} className={cl.titleBtn}>Project-d</div>
                <h2>OUCE,<span> Type</span></h2>
                <div className={cl.welcomeLogo}></div>
            </header>

            <main>
                <section className={cl.firstSection}>
                    <div className={cl.letter}></div>
                    <div className={cl.letter}></div>
                    <div className={cl.letter}></div>
                    <div className={cl.letter}></div>
                </section>

                <section className={cl.secondSection}></section>

                <section className={cl.thirdSection}>
                    <div className={cl.fontContainer}>
                        <div className={cl.font}></div>
                    </div>
                    <div className={cl.fontContainer}>
                        <div className={cl.font}></div>
                    </div>
                    <div className={cl.fontContainer}>
                        <div className={cl.font}></div>
                    </div>
                </section>
            </main>

            <footer className={cl.footer}>
                <h2 onClick={toNextProject}>NEXT PROJECT</h2>
            </footer>
            {nextProject}
        </div><TransitionDiv color='#46442D' ref={transitionDiv} /></>
    )
}

export default FontPageMobile