import { useEffect, useRef } from "react"
import gsap from "gsap"
import { useNavigate } from "react-router-dom"
import cl from './AboutPage.module.css'
import { TransitionDiv, useCustomTransition } from "../../hooks/useCustomTransition"

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

    const transition = useCustomTransition(transitionDiv)

    useEffect(() => {
        // window.scrollTo(0,1)
        document.body.style.overflowY = 'hidden'
        // console.log(window.scrollY)
        const ctx = gsap.context(() => {
            const tl = gsap.timeline()
            tl.from(title.current, {
                opacity: 0,
                xPercent: 100,
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
                    <h2 ref={title} className={cl.title}>Project—d</h2>
                    <div ref={fifth} style={{ opacity: 0 }} className={cl.contactsContainer}>
                        <div>+7 999 122 22 74</div>
                        <div>info@project-d.com</div>
                    </div>
                </div>
                <div className={cl.aboutInfoContainer}>
                    <div ref={first} style={{ opacity: 0 }}>
                        Мы группа профессионалов с широкими экспертизами,<br></br>
                        каждый в своем направлении. Мы не «агентство полного цикла»<br></br>
                        Мы действуем только в 3х направлениям, но делаем это эффективно
                    </div>
                    <div ref={second} style={{ opacity: 0 }}>
                        <span>Веб-решения:</span> от лэндинга, до сложного b2b/b2c проекта<br></br>
                        и умение обрабатывать Big Data
                    </div>
                    <div ref={third} style={{ opacity: 0 }}>
                        <span>Дизайн:</span> брендинг и вот это все- ондрей тут сам напиши<br></br>
                        че ещё ты там можешь
                    </div>
                    <div ref={fourth} style={{ opacity: 0 }}>
                        <span>Маркетинг-консалтинг:</span> любые исследования от Сast-dev, до<br></br>
                        сложных аналитических изысканий<br></br>
                        Курируют отрасль , Доценты Высшей Школы Экономики
                    </div>
                </div>
                <div ref={sixth} style={{ opacity: 0, display: "none" }} className={cl.projectsBtn} onClick={toMain}>Projects</div>
            </main>
            <TransitionDiv ref={transitionDiv} />
        </>
        
    )   
}

export default AboutPage