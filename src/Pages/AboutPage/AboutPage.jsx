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
                визуально привлекают целевую<br></br>
                аудиторию и эффективно передают<br></br>
                идею вашего бренда
            </div><div ref={fourth} style={{ opacity: 0 }}>
                <span>Маркетинг-консалтинг:</span> качественные и<br></br>
                количественные исследования<br></br>
                любой сложности и объема<br></br>
                от СustDev до массовых опросов,<br></br>
                аналитическое сопровождение.<br></br>
                Курируют отрасль специалисты<br></br>
                Высшей Школы Экономики.
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
                дизайны, которые визуально привлекают целевую аудиторию<br></br>
                и эффективно передают идею вашего бренда
            </div><div ref={fourth} style={{ opacity: 0 }}>
                <span>Маркетинг-консалтинг:</span> качественные и количественные<br></br>
                исследования любой сложности и объема от СustDev<br></br>
                до массовых опросов, аналитическое сопровождение.<br></br>
                Курируют отрасль специалисты Высшей Школы Экономики.
            </div></> 

    useEffect(() => {
        isMobile ? document.body.style.overflowY = 'auto'
                 : document.body.style.overflowY = 'hidden'
        document.querySelector('meta[name="theme-color"]').setAttribute("content", 'F2F2F2')
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
                        <a href="tel:+79092888678">+7 909 288 86 78</a>
                        <a href="mailto:project-d@inbox.ru">project-d@inbox.ru</a>
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

