import cl from './Welcome.module.css'
import gsap from 'gsap'
import { createSubtitle } from '../../functions/functions'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import cardData from '../../data/cardsData'
import { useMatchMedia } from '../../hooks/useMatchMedia'



const Welcome = ({toMain}) => {

    const { pathname } = useLocation()

    const { isMobile } = useMatchMedia()

    const card = cardData.filter(card => card.pathname === pathname)[0]

    const backgroundImage = `url(${isMobile 
        ?
        card.backgroundImageMobile || card.backgroundImage 
        :
        card.backgroundImage})`

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            gsap.from([`.${cl.firstSpan}`, `.${cl.secondSpan}`], {
                yPercent: 100,
                rotation: -3,
                duration: 1,
                delay: 0.5,
                stagger: 0.05,
                opacity: 0,
                ease: "power3.out",
            })

            gsap.from('.titleBtn', {
                opacity: 0,
                duration: 1,
            })
        })

        return () => ctx.revert()

    }, [])

    return (
        <header style={{backgroundImage, backgroundColor: pathname === '/hookahBrand' ? '#30BA09' : '#0F1010'}} className={cl.welcomeSection}>
                <div onClick={toMain} className='titleBtn'><p>Project-d</p></div>
                <h2>
                    {createSubtitle(card.title, cl.firstSpan)}
                    {createSubtitle(card.category, cl.secondSpan)}
                </h2>
                {pathname === '/hookahBrand' && <div className={cl.welcomeLogo}></div>}
            </header>
    )
}

export default Welcome