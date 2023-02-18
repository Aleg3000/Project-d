import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import cl from './HookahCatalogPage.module.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import { useRef } from 'react'
import { TransitionDiv, useCustomTransition } from "../../hooks/useCustomTransition"
import { useMatchMedia } from '../../hooks/useMatchMedia'
import { useTransitionNext } from '../../hooks/useTransitionNext'

const HookahCatalogPage = () => {

    const secondSection = useRef()

    const transitionDiv = useRef()

    const transition = useCustomTransition(transitionDiv)

    const { isMobile } = useMatchMedia()

    const [nextProject, toNextProject] = useTransitionNext('hookahBrand')

    const toMain = () => {
        transition().finally(() => navigate('/'))
    }


    useLayoutEffect(() => {

        window.scrollTo(0, 0)

        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {

            gsap.to(secondSection.current, {
                xPercent: -75,
                scrollTrigger: {
                    trigger: secondSection.current,
                    start: 'center center',
                    end: '4000',
                    pin: true,
                    scrub: true,
                    // markers: true,
                    immediateRender: false
                }
            })
        })

        return () => {ctx.revert()}
    }, [secondSection])

    const navigate = useNavigate()

    return (
        <div className={cl.container}>
            <header className={cl.welcomeSection}>
            <div onClick={toMain} className='titleBtn'><p>Project-d</p></div>
                <h2>UNION HOOKAH,<span> Catalog</span></h2>
                <div className={cl.welcomeLogo}></div>
             </header>

             <section className={cl.firstSection}>
                <div></div>
                <div></div>
             </section>

             <section ref={secondSection} className={cl.secondSection}>
                <div className={cl.pageView}></div>
                <div className={cl.pageView}></div>
                <div className={cl.pageView}></div>
                <div className={cl.pageView}></div>
             </section>

             <section className={cl.thirdSection}>
                <div></div>
                <div></div>
                <div></div>
             </section>

            <footer className={cl.footer}>
                <h2 className='nextProjectBtn' onClick={toNextProject}><p>NEXT PROJECT</p></h2>
            </footer>
            {nextProject}
            <TransitionDiv color={isMobile ? '#C6C6C6' : '#0F1010'} ref={transitionDiv} />
        </div>
    )
}

export default HookahCatalogPage