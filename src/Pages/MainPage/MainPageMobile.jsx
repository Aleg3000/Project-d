import cl from './MainPageMobile.module.css'
import Carousel from '../../Components/Carousel/Carousel';
import { useRef } from 'react';
import { useEffect } from 'react';

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

    useEffect(() =>  window.scrollTo(0, 0), [])
    
    return (
        <main ref={main} className={cl.main}>
            <div className={cl.title}>Project-d</div>
            <div className={cl.cardVisibleContainer}>
                <Carousel main={main} className={cl.cardContainer}>
                    {dataSet.map((el, i) => <div key={i} data-page={el} className={[cl.card, cl[`card${i + 1}`]].join(' ')}>
                        <h2>{titles[i].split(',')[0]},<span>{titles[i].split(',')[1]}</span></h2>
                    </div>)}
                </Carousel>
            </div>
            <div className={cl.aboutBtn}>About Us</div>
        </main>
    )
}

export default MainPageMobile