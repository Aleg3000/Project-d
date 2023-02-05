import { useNavigate } from 'react-router-dom'
import cl from './FontPage.module.css'

const FontPage = () => {
    const navigate = useNavigate()
    return (
        <div className={cl.container}>
            <header className={cl.welcomeSection}>
                <div onClick={() => navigate('/')} className={cl.titleBtn}>Project-d</div>
                <h2>OUCE,<span> Type</span></h2>
                <div className={cl.welcomeLogo}></div>
             </header>

             <main>
                <section className={cl.firstSection}>
                    <div className={cl.letter}></div>
                    <div className={cl.letter}></div>
                    <div className={cl.letter}></div>
                    <div className={cl.letter}></div>
                </section>

                <section className={cl.secondSection}></section>

                <section className={cl.thirdSection}>
                    <div className={cl.mask}>
                        {/* <div className={cl.transparent}></div>
                        <div className={cl.transparent}></div>
                        <div className={cl.transparent}></div> */}
                    </div>
                </section>
             </main>

             <footer className={cl.footer}>
                <h2 onClick={() => navigate('/hookahCatalog')}>NEXT PROJECT</h2>
            </footer>
        </div>
    )
}

export default FontPage