import audiTitle from '../assets/audi/title.png'
import fontTitle from '../assets/font/title.png'
import fontTitleMobile from '../assets/font/title-mobile.png'
import hookahCatalogTitle from '../assets/union-hookah-catalog/title.jpg'
// import hookahCatalogBranding from '../assets/union-hookah/title.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cl from '../Pages/HookahPage/HookahPage.module.css'
import { useMatchMedia } from './useMatchMedia'

const projects = {
    hookahCatalog: {
        title: hookahCatalogTitle
    },
    hookahBrand: {},
    audi: {
        title: audiTitle
    },
    font: {
        title: fontTitle,
        mobileTitle: fontTitleMobile
    },
}


const useTransitionNext = (nextProject) => {

    const { isMobile } = useMatchMedia()

    const title = isMobile 
        ?
        projects[nextProject].mobileTitle || projects[nextProject].title 
        :
        projects[nextProject].title

    const navigate = useNavigate()
    const styles = {
        position: 'relative',
        zIndex: '99',
        width: '100vw',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundColor: '#30BA09',
        backgroundImage: `url(${title})`
    }

    const [readyToNext, setReadyToNext] = useState(false)

    const nextProjectElement = title 
                                ? 
                                readyToNext && <div style={styles}></div>
                                :
                                readyToNext && <div className={cl.welcomeSection}>
                                    <div className={cl.welcomeLogo}></div>
                                </div>

    const toNextProject = () => {
        setReadyToNext(true)

        requestAnimationFrame( () => {
            let scrollHeight = Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight
              );
    
            window.scrollTo({top: scrollHeight, behavior: 'smooth'})

            setTimeout(() => navigate('/' + nextProject), 1000) 
        })
    }

    return [nextProjectElement, toNextProject]
}

export {useTransitionNext}