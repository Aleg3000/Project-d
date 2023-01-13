import gsap from 'gsap'
import { createRef } from 'react'
import Card from './Card/MainCard';
import cl from './MainCards.module.css'

const MainCards = () => {

    const container = createRef()

    const colors = ['#CE5033', '#B15000', '#7FA7A8', '#C22E20', 'lime']

    const cards = [
        'PORSCHE DAKAR, Testing',
        'UNION HOOKAH, Packing',
        '3D LETTERING, Lettering',
        'AUDI QUATTRO DAYS, Branding',
        'OUCE TYPEFACE, Fonts',
    ]

    function slideCard(mode, card, i) {
        const title = card.firstChild
        const translate = 27.25; /*  поправить расчеты */
        
        if (mode === 'open') {
            gsap.to('main', {backgroundColor: colors[i], duration: 1})
            // to fix
            gsap.to(title, {opacity: 1, duration: 1, delay: 0.3 })
            gsap.to(card, {width: '70rem', opacity: 1, ease: "expo.out", duration: 1})
            if (i === 2) return;
            gsap.to(container.current, {
                transform: `translateX(${i < 2 ? translate : - translate}rem)`,
                ease: "expo.out",
                duration: 1,
            })
        } else {
            gsap.to(card, {width: '15.5rem', opacity: 1, ease: "expo.out", duration: 1})
            gsap.to('main', {backgroundColor: '#0F1010', duration: 1})
            // to fix
            gsap.to(title, {opacity: 0, duration: 0.1, overwrite: true})
            if (i === 2) return;
            gsap.to(container.current, {transform: 'translateX(0)', ease: "expo.out", duration: 1})
        }
    }

    function openCard(e) {
            const a = e.currentTarget.cloneNode(true)
            a.style.position = 'absolute'
            a.style.top = e.currentTarget.getBoundingClientRect().top + 'px'
            a.style.left = e.currentTarget.getBoundingClientRect().left + 'px'
            document.body.appendChild(a)
            gsap.to(a, {width: '100vw', height: '100vh', top: '0', left: '0', borderRadius: '0'})
    }

    

    return (
        <div className={cl.mainContainer} ref={container}>
            {cards.map((card, i) => <Card 
                                        open={openCard}
                                        slide={slideCard} 
                                        title={card} 
                                        index={i} 
                                        key={i+card[0]} 
                                    />)}
        </div>
    )
}

export default MainCards