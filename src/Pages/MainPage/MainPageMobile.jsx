import cl from './MainPageMobile.module.css'
import Carousel from '../../Components/Carousel/Carousel';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const dataSet = ['hookahCatalog', 'hookahBrand', 'threeD', 'audi', 'font']

const titles = [
    'UNION HOOKAH, Catalog',
    'UNION HOOKAH, Branding',
    '3D LETTERING, Lettering',
    'AUDI QUATTRO DAYS, Key visual',
    'OUCE, Type',
]

const MainPageMobile = () => {
    const main = useRef()
    const title = useRef()
    const about = useRef()
    const cardsContainer = useRef()

    const navigate = useNavigate()

    useEffect(() =>  {
        window.scrollTo(0, 0)
        document.body.style.overflowY = 'hidden'

        return () => document.body.style.overflowY = 'auto'
    }, [])

    const toAbout = () => {
        title.current.style.opacity = 0
        about.current.style.opacity = 0
        gsap.to(cardsContainer.current, {
            yPercent: -150,
            duration: 0.8,
            onComplete: () => navigate('about')
        })
    }
    
    return (
        <main ref={main} className={cl.main}>
            <div ref={title} className={cl.title}>Project-d</div>
            <div ref={cardsContainer} className={cl.cardVisibleContainer}>
                <Carousel main={main} className={cl.cardContainer}>
                    {dataSet.map((el, i) => <div key={i} data-page={el} className={[cl.card, cl[`card${i + 1}`]].join(' ')}>
                        <h2>{titles[i].split(',')[0]},<span>{titles[i].split(',')[1]}</span></h2>
                    </div>)}
                </Carousel>
            </div>
            <div ref={about} onClick={toAbout} className={cl.aboutBtn}>About Us</div>
        </main>
    )
}

export default MainPageMobile