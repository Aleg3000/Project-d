import cl from './MainPage.module.css'

const MainPage = () => {
    return (
        <main className={cl.main}>
        <h1 class="title">Project-d</h1>
        <div class="container">
            <div class="card card1">
                <h2>PORSCHE DAKAR, Testing</h2>
            </div>
            <div class="card card2">
                <h2>UNION HOOKAH, Packing</h2>
            </div>
            <div class="card card3">
                <h2>3D LETTERING, Lettering</h2>
            </div>
            <div class="card card4">
                <h2>AUDI QUATTRO DAYS, Branding</h2>
            </div>
            <div class="card card5">
                <h2>OUCE TYPEFACE, Fonts</h2>
            </div>
        </div>
        <div class="about">About us</div>
        <div class="blur"></div>
        <div class="about-container">
            <div class="about-card active"><div>About us</div></div>
            <div class="about-card"><div>Contacts</div></div>
        </div>
    </main>
    )
}

export default MainPage