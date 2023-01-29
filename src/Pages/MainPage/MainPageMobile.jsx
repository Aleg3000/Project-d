import cl from './MainPageMobile.module.css'
import Carousel from '../../Components/Carousel/Carousel';
import { useRef } from 'react';

const dataSet = ['test', 'hookah', 'threeD', 'audi', 'font']

const MainPageMobile = () => {
    const main = useRef()
    return (
        <main ref={main} className={cl.main}>
            <div className={cl.title}>Project-d</div>
            <div className={cl.cardVisibleContainer}>
                <Carousel main={main} className={cl.cardContainer}>
                    <div data-page='test' className={cl.card}></div>
                    <div data-page='hookah' className={cl.card}></div>
                    <div data-page='threeD' className={cl.card}></div>
                    <div data-page='audi' className={cl.card}></div>
                    <div data-page='font' className={cl.card}></div>
                </Carousel>
            </div>
            <div className={cl.aboutBtn}>About Us</div>
        </main>
    )
}

export default MainPageMobile