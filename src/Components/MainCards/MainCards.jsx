import gsap from 'gsap'
import { createRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';
import Card from './Card/MainCard';
import cl from './MainCards.module.css'

const MainCards = () => {

    const container = createRef()

    const navigate = useNavigate()

    const [context, setContext] = useContext(MyContext);

    const colors = ['#B15000', '#CE5033', '#7FA7A8', '#C22E20', 'lime']

    const cards = [
        'PORSCHE DAKAR, Testing',
        'UNION HOOKAH, Packing',
        '3D LETTERING, Lettering',
        'AUDI QUATTRO DAYS, Branding',
        'OUCE TYPEFACE, Fonts',
    ]

    const dataSet = ['test', 'hookah', 'threeD', 'audi', 'font']

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

            console.log(page)

            gsap.to(title, { fontSize: '8rem', lineHeight: '8rem', opacity: 1 })
            gsap.to(a, { width: '100vw', height: '100vh', top: '0', left: '0', borderRadius: '0',
                // duration: 2,
                onComplete: () => {
                // setContext({isProject: true, currentPage: page})

                navigate(page)
                
                document.body.style.overflow = 'auto'
                setTimeout(() => a.remove(), 0);
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