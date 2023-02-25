import { useEffect, useRef } from "react"
import gsap from "gsap"
import { useNavigate } from "react-router-dom"
import cl from './AboutPage.module.css'
import { TransitionDiv, useCustomTransition } from "../../hooks/useCustomTransition"
import { useMatchMedia } from "../../hooks/useMatchMedia"

const AboutPage = () => {
    const navigate = useNavigate()

    const container = useRef()
    const title = useRef()
    const first = useRef()
    const second = useRef()
    const third = useRef()
    const fourth = useRef()
    const fifth = useRef()
    const sixth = useRef()

    const transitionDiv = useRef()

    const { isMobile } = useMatchMedia()

    const transition = useCustomTransition(transitionDiv)

    const mobileText = <><div ref={first} style={{ opacity: 0, marginBottom: '2rem' }}>
            Мы команда опытных профессионалов,<br></br>
            стремящихся предоставить<br></br>
            исключительную работу, которая<br></br>
            превосходит ожидания наших клиентов.
        </div><div ref={second} style={{ opacity: 0 }}>
                <span>Веб-решения:</span> красивые и<br></br>
                функциональные веб-сайты<br></br>
                от лэндинга, до сложного b2b/b2c<br></br>
                проекта, оптимизированные<br></br>
                как для пользователей, так и для<br></br>
                поисковых систем
            </div><div ref={third} style={{ opacity: 0 }}>
                <span>Дизайн:</span> от логотипов до маркетинговых<br></br>
                материалов мы создаем дизайны, которые<br></br>
                визуально привлекают и эффективно<br></br>
                передают идею вашего бренда
            </div><div ref={fourth} style={{ opacity: 0 }}>
                <span>Маркетинг-консалтинг:</span> любые исследования от Сast-dev, до<br></br>
                сложных аналитических изысканий.<br></br>
                Курируют отрасль, Доценты Высшей Школы Экономики
            </div></> 

    const desktopText = <><div ref={first} style={{ opacity: 0, marginBottom: '2rem' }}>
            Мы команда опытных профессионалов, стремящихся<br></br>
            предоставить исключительную работу, которая превосходит <br></br>
            ожидания наших клиентов.
        </div><div ref={second} style={{ opacity: 0 }}>
                <span>Веб-решения:</span> красивые и функциональные веб-сайты<br></br>
                от лэндинга, до сложного b2b/b2c проекта, оптимизированные<br></br>
                как для пользователей, так и для поисковых систем
            </div><div ref={third} style={{ opacity: 0 }}>
                <span>Дизайн:</span> от логотипов до маркетинговых материалов мы создаем<br></br>
                дизайны, которые визуально привлекают и эффективно передают<br></br>
                идею вашего бренда
            </div><div ref={fourth} style={{ opacity: 0 }}>
                <span>Маркетинг-консалтинг:</span> любые исследования от Сast-dev,<br></br>
                до сложных аналитических изысканий.<br></br>
                Курируют отрасль, Доценты Высшей Школы Экономики
            </div></> 

    useEffect(() => {
        // window.scrollTo(0,1)
        isMobile ? document.body.style.overflowY = 'auto'
                 : document.body.style.overflowY = 'hidden'
        // console.log(window.scrollY)
        const ctx = gsap.context(() => {
            const tl = gsap.timeline()
            tl.from(title.current, {
                opacity: 0,
                xPercent: 70,
                duration: 1
            })
            tl.to(first.current, {opacity: 1, duration: 1})
            tl.to(second.current, {opacity: 1, duration: 1})
            tl.to(third.current, {opacity: 1, duration: 1})
            tl.to(fourth.current, {opacity: 1, duration: 1})
            tl.to(fifth.current, {opacity: 1, duration: 1, onComplete: () => {
                sixth.current.style.display = 'block'
            }})
            tl.to(sixth.current, {opacity: 1, duration: 1})
        })
        
        
        return () => ctx.revert()

    }, [])

    const toMain = () => {
        transition().finally(() => navigate('/'))
    }

    return (
        <>
            <main ref={container} className={cl.aboutContainer}>
                <div className={cl.contactInfoContainer}>
                    <h2 onClick={toMain} ref={title} className={cl.title}>Project—d</h2>
                    <div ref={fifth} style={{ opacity: 0 }} className={cl.contactsContainer}>
                        <div>+7 999 122 22 74</div>
                        <div>info@project-d.com</div>
                    </div>
                </div>
                <div className={cl.aboutInfoContainer}>
                    {isMobile ? mobileText : desktopText}
                </div>
                <div ref={sixth} style={{ opacity: 0, display: "none" }} className={cl.projectsBtn} onClick={toMain}>Projects</div>
            </main>
            <TransitionDiv ref={transitionDiv} />
        </>
    )   
}

export default AboutPage

