import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import cl from './FontPage.module.css'
import { TransitionDiv, useCustomTransition } from "../../hooks/useCustomTransition"
import { useTransitionNext } from '../../hooks/useTransitionNext'
import Welcome from '../../Components/Welcome/Welcome'


const FontPage = () => {
    const navigate = useNavigate()

    const transitionDiv = useRef()

    const transition = useCustomTransition(transitionDiv)

    const toMain = () => {
        transition().finally(() => navigate('/'))
    }

    const [nextProject, toNextProject] = useTransitionNext('hookahCatalog')

    useEffect(() => window.scrollTo(0, 0), [])
    
    return (
        <div className={cl.container}>
             <Welcome toMain={toMain} />

             <main>
                <section className={cl.firstSection}>
                    <div className={cl.letter}></div>
                    <div className={cl.letter}></div>
                    <div className={cl.letter}></div>
                    <div className={cl.letter}></div>
                </section>

                <section className={cl.secondSection}></section>

                <section className={cl.thirdSection}>
                    <div className={cl.mask}></div>
                </section>
             </main>

             <footer className={cl.footer}>
                <h2 className='nextProjectBtn' onClick={toNextProject}><p>NEXT PROJECT</p></h2>
            </footer>
            {nextProject}
            <TransitionDiv ref={transitionDiv} />
        </div>
    )
}

export default FontPage