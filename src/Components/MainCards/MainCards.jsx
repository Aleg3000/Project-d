import gsap from 'gsap'
import { useNavigate } from 'react-router-dom';
import Card from './Card/MainCard';
import cl from './MainCards.module.css'
import cardCl from './Card/MainCard.module.css'
import cardData from '../../data/cardsData';
import { useState } from 'react';
import { useEffect } from 'react';

const MainCards = ({container}) => {

    const [isOpening, setIsOpening] = useState(false)

    const navigate = useNavigate()

    function slideCard(mode, card, i, e, color) {
        if (isOpening) return
        const title = card.firstChild
        const translate = 27.25; /* rem */
        
        if (mode === 'open') {
            gsap.to('main', {backgroundColor: color, duration: 1})
            // to fix
            gsap.to(title, {opacity: 1, duration: 1, delay: 0.3 })
            gsap.to(card, {width: '70rem', opacity: 1, ease: "expo.out", duration: 1})
        } else {
            gsap.to(card, {width: '15.5rem', opacity: 1, ease: "expo.out", duration: 1})
            gsap.to('main', {backgroundColor: '#0F1010', duration: 1})
            // to fix
            gsap.to(title, {opacity: 0, duration: 0.1, overwrite: true})
        }
    }

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

    return (
        <div className={cl.mainContainer} ref={container}>
            {cardData
                .map((card, i) => <Card open={openCard} slide={slideCard} cardInfo={card} index={i} key={i} 
                                    />)}
        </div>
    )
}

export default MainCards