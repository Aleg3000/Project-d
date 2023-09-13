import gsap from 'gsap'
import { useNavigate } from 'react-router-dom';
import Card from './Card/MainCard';
import cl from './MainCards.module.css'
import cardCl from './Card/MainCard.module.css'
import cardData from '../../data/cardsData';
import { useState } from 'react';

const MainCards = ({container}) => {

    const [isOpening, setIsOpening] = useState(false)

    const navigate = useNavigate()

    function openCard(e) {
            setIsOpening(true)
            const a = e.currentTarget.cloneNode(true)
            a.style.position = 'absolute'
            a.style.top = e.currentTarget.getBoundingClientRect().top + 'px'
            a.style.left = e.currentTarget.getBoundingClientRect().left + 'px'
            a.style.display = 'none'
            document.body.appendChild(a)
            const { dataset: { page } } = e.currentTarget

            gsap.to(`.${cardCl.titleSpan}`, {
                yPercent: 100,
                rotation: -3,
                duration: 0.5,
                stagger: 0.05,
                opacity: 0,
                ease: "power3.out",
            })

            gsap.to(a, { width: '100vw', height: '100vh', top: '0', left: '0', fontSize: '2.5rem',
            borderRadius: '0',
            duration: 0.5,
            delay: 1,
            onStart: () => a.style.display = 'block',
            onComplete: () => {
                navigate(page)
                a.remove()
            }
        })
    }

    const [currentCard, setCurrentCard] = useState(null)

    const onMouseEnter = (e) => {
        const newCard = e.target
        const newCardIndex = Number(newCard.dataset.index)
        if (isNaN(newCardIndex) || isOpening) return
        const color = newCard.dataset.color
        const title = newCard.firstChild
        gsap.to('main', {backgroundColor: color, duration: 1})
        gsap.to(title, {opacity: 1, duration: 1, delay: 0.3 })
        gsap.to(newCard, {width: '70rem', opacity: 1, ease: "expo.out", duration: 1})
        setCurrentCard(newCardIndex)
    }

    const onMouseLeave = (e) => {
        const prevCard = e.currentTarget.querySelectorAll('div')[currentCard]
        gsap.to(prevCard, {width: '15.5rem', opacity: 1, ease: "power1.out", duration: 1.5})
        gsap.to('main', {backgroundColor: '#0F1010', duration: 1})
        gsap.to(prevCard.firstChild, {opacity: 0, duration: 0.1, overwrite: true})
        setCurrentCard(null)
    }

    const onMouseMove = (e) => {
        const newCard = e.target
        const newCardIndex = Number(newCard.dataset.index)
        if (isNaN(newCardIndex) || isOpening) return
        if (currentCard !== newCardIndex) {
            const color = newCard.dataset.color
            const title = newCard.firstChild
            gsap.to('main', {backgroundColor: color, duration: 1})
            gsap.to(title, {opacity: 1, duration: 1, delay: 0.3 })
            gsap.to(newCard, {width: '70rem', opacity: 1, ease: "expo.out", duration: 1})


            if (currentCard !== null) {
                const prevCard = e.currentTarget.querySelectorAll('div')[currentCard]
                gsap.to(prevCard, {width: '15.5rem', opacity: 1, ease: "power1.out", duration: 1.5})
                gsap.to(prevCard.firstChild, {opacity: 0, duration: 0.1, overwrite: true})
            }

            setCurrentCard(newCardIndex)

        }
    }



    return (
        <div 
            onMouseEnter={onMouseEnter} 
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className={cl.mainContainer} 
            ref={container}
        >
            {cardData
                .map((card, i) => <Card 
                                    open={openCard} 
                                    cardInfo={card} 
                                    index={i} 
                                    key={i} 
                                  />)}
        </div>
    )
}

export default MainCards