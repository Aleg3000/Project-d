import cl from './MainPageMobile.module.css'
import Carousel from '../../Components/Carousel/Carousel';
import { useRef } from 'react';



const MainPageMobile = () => {
    const main = useRef()
    return (
        <main ref={main} className={cl.main}>
            <div className={cl.title}>Project-d</div>
            <div className={cl.cardVisibleContainer}>
                <Carousel main={main} className={cl.cardContainer}>
                    <div className={cl.card}></div>
                    <div className={cl.card}></div>
                    <div className={cl.card}></div>
                    <div className={cl.card}></div>
                    <div className={cl.card}></div>
                </Carousel>
            </div>
            <div className={cl.aboutBtn}>About Us</div>
        </main>
    )
}

export default MainPageMobile