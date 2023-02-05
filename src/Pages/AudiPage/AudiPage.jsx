import cl from './AudiPage.module.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const AudiPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <header className={cl.header}>
                <div onClick={() => navigate('/')} className={cl.titleBtn}>Project-d</div>
                <h2>AUDI QUATTRO DAYS,<span> Key visual</span></h2>
            </header>
            <main className={cl.main}>
                <section className={cl.section}>
                    <div className={cl.audi1}></div>
                </section>
                <section className={cl.section}>
                    <div className={cl.audi2}></div>
                </section>
                <section className={cl.section}>
                    <div className={cl.audi3}></div>
                </section>
            </main>
            <footer className={cl.footer}>
            <h2 onClick={() => navigate('/font')}>NEXT PROJECT</h2>
            </footer>
        </>
        
        
    )
}

export default AudiPage