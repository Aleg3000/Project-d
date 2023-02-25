import cl from './MainPageMobile.module.css'
import Carousel from '../../Components/Carousel/Carousel';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import cardData from '../../data/cardsData';
import { TransitionDiv, useCustomTransition } from "../../hooks/useCustomTransition"
import { createSubtitle } from '../../functions/functions';

const MainPageMobile = () => {
    const main = useRef()
    const title = useRef()
    const about = useRef()
    const cardsContainer = useRef()
    const transitionDiv = useRef()

    const navigate = useNavigate()

    const transition = useCustomTransition(transitionDiv)

    const toMain = () => {
        transition().finally(() => navigate('/'))
    }

    useEffect(() =>  {
        gsap.registerPlugin()
        window.scrollTo(0, 0)
        document.body.style.overflowY = 'hidden'

        const tl = gsap.timeline()

        tl.to(cardsContainer.current, {opacity: 1, duration: 1, delay: 0.5})
        tl.to(title.current, {opacity: 1})
        tl.to(about.current, {opacity: 1})

        return () => document.body.style.overflowY = 'auto'
    }, [])

    const toAbout = () => {
        transition().finally(() => navigate('/about'))
    }
    
    return (
        <>
            <main ref={main} className={cl.main}>
                <div ref={title} className={cl.title}>Project-d</div>
                <div ref={cardsContainer} className={cl.cardVisibleContainer}>
                    <Carousel main={main} className={cl.cardContainer}>
                        {cardData.map((card, i) => <div key={i} data-page={card.dataset} className={[cl.card, cl[card.className]].join(' ')}>
                            <h2>
                                {createSubtitle(card.title, cl.titleSpan)}
                                {createSubtitle(card.category, cl.titleSpan)}
                            </h2>
                        </div>)}
                    </Carousel>
                </div>
                <div ref={about} onClick={toAbout} className={cl.aboutBtn}>About Us</div>
            </main>
            <TransitionDiv color='#F2F2F2' ref={transitionDiv} />
        </>
    )
}

export default MainPageMobile