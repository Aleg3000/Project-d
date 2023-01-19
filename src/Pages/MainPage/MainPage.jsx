import cl from './MainPage.module.css'
import MainCards from '../../Components/MainCards/MainCards';
import About from '../../Components/About/About';

const MainPage = () => {
    return (
        <main className={cl.main}>
            <h1 className={cl.mainTitle}>Project-d</h1>
            <MainCards />
            <About />
        </main>
    )
}

export default MainPage