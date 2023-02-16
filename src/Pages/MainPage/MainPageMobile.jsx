import cl from './MainPageMobile.module.css'
import Carousel from '../../Components/Carousel/Carousel';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import cardData from '../../data/cardsData';

const MainPageMobile = () => {
    const main = useRef()
    const title = useRef()
    const about = useRef()
    const cardsContainer = useRef()
    const transitionDiv = useRef()

    const navigate = useNavigate()

    useEffect(() =>  {
        window.scrollTo(0, 0)
        document.body.style.overflowY = 'hidden'

        return () => document.body.style.overflowY = 'auto'
    }, [])

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
            yPercent: -150,
            duration: 0.8,
            
        })
    }
    
    return (
        <><main ref={main} className={cl.main}>
            <div ref={title} className={cl.title}>Project-d</div>
            <div ref={cardsContainer} className={cl.cardVisibleContainer}>
                <Carousel main={main} className={cl.cardContainer}>
                    {cardData.map((card, i) => <div key={i} data-page={card.dataset} className={[cl.card, cl[card.className]].join(' ')}>
                        <h2>{card.title},<span> {card.category}</span></h2>
                    </div>)}
                </Carousel>
            </div>
            <div ref={about} onClick={toAbout} className={cl.aboutBtn}>About Us</div>
        </main><div ref={transitionDiv} className={cl.transitionDiv}>
            <div className={cl.test}></div>
            </div></>
    )
}

export default MainPageMobile