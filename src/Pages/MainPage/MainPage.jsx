import cl from './MainPage.module.css'
import MainCards from '../../Components/MainCards/MainCards';


const MainPage = () => {
    return (
        <main className={cl.main}>
        <h1 className={cl.mainTitle}>Project-d</h1>
        <MainCards />
        <div className={cl.aboutBtn}>About us</div>
        <div className={cl.aboutContainer}>
            <div className={cl.aboutCard + ' ' + cl.active}><div>About us</div></div>
            <div className={cl.aboutCard}><div>Contacts</div></div>
        </div>
    </main>
    )


}

export default MainPage