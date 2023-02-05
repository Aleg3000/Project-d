import cl from './MainPageMobile.module.css'
import Carousel from '../../Components/Carousel/Carousel';
import { useRef } from 'react';

const dataSet = ['hookahCatalog', 'hookahBrand', 'threeD', 'audi', 'font']

const MainPageMobile = () => {
    const main = useRef()
    return (
        <main ref={main} className={cl.main}>
            <div className={cl.title}>Project-d</div>
            <div className={cl.cardVisibleContainer}>
                <Carousel main={main} className={cl.cardContainer}>
                    {/* <div data-page='hookahCatalog' className={cl.card}></div>
                    <div data-page='hookahBrand' className={cl.card}></div>
                    <div data-page='threeD' className={cl.card}></div>
                    <div data-page='audi' className={cl.card}></div>
                    <div data-page='font' className={cl.card}></div> */}
                    {dataSet.map((el, i) => <div key={i} data-page={el} className={cl.card}></div>)}
                </Carousel>
            </div>
            <div className={cl.aboutBtn}>About Us</div>
        </main>
    )
}

export default MainPageMobile