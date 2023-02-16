import gsap from 'gsap'
import { useNavigate } from 'react-router-dom';
import Card from './Card/MainCard';
import cl from './MainCards.module.css'
import cardData from '../../data/cardsData';

const MainCards = ({container}) => {

    const navigate = useNavigate()

    function slideCard(mode, card, i, e, color) {
        const title = card.firstChild
        const translate = 27.25; /* rem */
        
        if (mode === 'open') {
            gsap.to('main', {backgroundColor: color, duration: 1})
            // to fix
            gsap.to(title, {opacity: 1, duration: 1, delay: 0.3 })
            gsap.to(card, {width: '70rem', opacity: 1, ease: "expo.out", duration: 1})
            // if (i !== 2) {
            //     gsap.to(container.current, {
            //         transform: `translateX(${i < 2 ? translate : - translate}rem)`,
            //         ease: "expo.out",
            //         duration: 1,
            //     })
            // }
        } else {
            gsap.to(card, {width: '15.5rem', opacity: 1, ease: "expo.out", duration: 1})
            gsap.to('main', {backgroundColor: '#0F1010', duration: 1})
            // to fix
            gsap.to(title, {opacity: 0, duration: 0.1, overwrite: true})
            // if (i === 2) return;
            // gsap.to(container.current, {transform: 'translateX(0)', ease: "expo.out", duration: 1})
        }
    }

    function openCard(e) {
            const a = e.currentTarget.cloneNode(true)
            a.style.position = 'absolute'
            a.style.top = e.currentTarget.getBoundingClientRect().top + 'px'
            a.style.left = e.currentTarget.getBoundingClientRect().left + 'px'
            document.body.appendChild(a)
            const title = a.firstChild
            const { dataset: { page } } = e.currentTarget

            gsap.to(title, { fontSize: '8rem', lineHeight: '8rem', opacity: 1 })
            gsap.to(a, { width: '100vw', height: '100vh', top: '0', left: '0', fontSize: '2.5rem',
                borderRadius: '0',
                duration: 0.5,
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