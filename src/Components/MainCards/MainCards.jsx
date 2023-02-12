import gsap from 'gsap'
import { useNavigate } from 'react-router-dom';
import Card from './Card/MainCard';
import cl from './MainCards.module.css'

const MainCards = ({container}) => {

    const navigate = useNavigate()

    const colors = ['#C6C6C6', '#0D2805', '#7FA7A8', '#E5291F', '#46442D']

    const cards = [
        'UNION HOOKAH, Catalog',
        'UNION HOOKAH, Branding',
        '3D LETTERING, Lettering',
        'AUDI QUATTRO DAYS, Key visual',
        'OUCE, Type',
    ]

    const dataSet = ['hookahCatalog', 'hookahBrand', 'threeD', 'audi', 'font']

    function slideCard(mode, card, i, e) {
        const title = card.firstChild
        const translate = 27.25; /* rem */
        
        if (mode === 'open') {
            gsap.to('main', {backgroundColor: colors[i], duration: 1})
            // to fix
            gsap.to(title, {opacity: 1, duration: 1, delay: 0.3 })
            gsap.to(card, {width: '70rem', opacity: 1, ease: "expo.out", duration: 1})
            if (i !== 2) {
                gsap.to(container.current, {
                    transform: `translateX(${i < 2 ? translate : - translate}rem)`,
                    ease: "expo.out",
                    duration: 1,
                })
            }
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
            {cards.map((card, i) => <Card 
                                        dataSet={dataSet[i]}
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