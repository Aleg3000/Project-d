import cl from './AudiPage.module.css'

const AudiPage = () => {
    return (
        <>
            <header className={cl.header}>
                <h2>AUDI QUATTRO DAYS, Branding</h2>
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
                <h2>NEXT PROJECT</h2>
            </footer>
        </>
        
        
    )
}

export default AudiPage