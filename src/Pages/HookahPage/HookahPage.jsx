import cl from './HookahPage.module.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { TransitionDiv, useCustomTransition } from "../../hooks/useCustomTransition"
import { useMatchMedia } from '../../hooks/useMatchMedia'
import { useTransitionNext } from '../../hooks/useTransitionNext'
import Welcome from '../../Components/Welcome/Welcome'


const HookahPage = () => {

    const navigate = useNavigate()

    const themeTrigger = useRef()

    const firstBg = useRef()
    const firstFont = useRef()
    const leftDudka = useRef()
    const rightDudka = useRef()
    const overflowFont = useRef()

    const logoU = useRef()
    const logoNion = useRef()
    const logoHookah = useRef()

    const bags = useRef()
    const topMotionText = useRef()
    const centerMotionText = useRef()

    const blackSquareContainer = useRef()
    const blackSquare = useRef()
    const sitePage = useRef()

    const whiteSquareContainer = useRef()
    const whiteSquare = useRef()
    const mockUpContainer = useRef()

    const nextProject = useRef()

    const transitionDiv = useRef()

    const transition = useCustomTransition(transitionDiv)

    const [nextProjectEl, toNextProject] = useTransitionNext('audi')


    const { isMobile } = useMatchMedia();

    const toMain = () => {
        transition().finally(() => navigate('/'))
    }

    useLayoutEffect(() => {

        window.scrollTo(0, 0)

        document.body.style.overflowY = 'auto'

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {

            // if (isMobile) {
            //     document.querySelector('meta[name="theme-color"]').setAttribute("content", '#30BA09')
            //     ScrollTrigger.create({
            //         trigger: themeTrigger.current,
            //         start: 'top top',
            //         onEnter: () => document.querySelector('meta[name="theme-color"]').setAttribute("content", '#0F1010'),
            //         onLeaveBack: () => document.querySelector('meta[name="theme-color"]').setAttribute("content", '#30BA09'),
            //         markers: true
            //     })
            // }

            ScrollTrigger.create({
                trigger: firstBg.current,
                pin: true,
                start: "top 200px",
                end: "+=800",
            });

            gsap.from(firstFont.current, {
                x: '100vw',
                scrollTrigger: {
                    trigger: firstFont.current,
                    scrub: 1,
                    start: "top 200px",
                    end: "+=800",
                    pin: true,
                    immediateRender: false /*  i should read about it, its prevents jumps using fast scroll */
                }
            })

            gsap.from(overflowFont.current, {
                x: '100vw',
                scrollTrigger: {
                    trigger: overflowFont.current,
                    scrub: 1,
                    start: "top 200px",
                    end: "+=800",
                    pin: true
                }
            })
            

            gsap.from(logoU.current, {
                x: function(index, target, targets) { 
                    return target.clientWidth * 0.42; 
                },
                duration: 0.6,
                scrollTrigger: {
                    trigger: logoU.current,
                    start: 'center 75%',
                }
            })
            gsap.from(logoNion.current, {
                x: '100vw',
                duration: 0.7,
                scrollTrigger: {
                    trigger: logoU.current,
                    start: 'center 75%',
                }
            })
            gsap.from(logoHookah.current, {
                x: '100vw',
                delay: 1,
                duration: 0.7,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: logoU.current,
                    start: 'center 75%',
                }
            })



            gsap.from(topMotionText.current, {
                x: '-100%',
                duration: 1.7,
                ease: "elastic.out(2, 0.2)",
                scrollTrigger: {
                    trigger: topMotionText.current,
                    start: '25% center',
                    toggleActions: 'play reverse play reverse',
                }
            })

            gsap.from(centerMotionText.current, {
                x: '100%',
                duration: 1.7,
                ease: "elastic.out(2, 0.2)",
                scrollTrigger: {
                    trigger: topMotionText.current,
                    start: '25% center',
                    toggleActions: 'play reverse play reverse',
                }
            })

            
            gsap.to(blackSquareContainer.current, {
                scrollTrigger: {
                    trigger: blackSquareContainer.current,
                    start: 'center center',
                    end: "+=1000",
                    pin: true,
                }
            })

            gsap.to(blackSquare.current, {
                height: '100vh',
                width: '100vw',
                scrollTrigger: {
                    trigger: blackSquareContainer.current,
                    start: 'center center',
                    scrub: 1,
                    end: "+=400",
                },
            })

            gsap.to(sitePage.current, {
                scrollTrigger: {
                    trigger: blackSquareContainer.current,
                    start: 'center center',
                    scrub: 1,
                    end: "+=800",
                },
                keyframes: {
                    "0%":   { top: '50vh', left: '50vw', width: 0, height: 0},
                    "50%":  { top: '50vh', left: '50vw', width: 0, height: 0},
                    "100%": { top: 0, left: 0, width: '100vw', height: '100vh'},
                   },
            })

            gsap.to(whiteSquareContainer.current, {
                scrollTrigger: {
                    trigger: whiteSquareContainer.current,
                    start: 'center center',
                    end: "+=1000",
                    pin: true,
                    onEnterBack: () => {
                        nextProject.current.style.display = 'none'
                        console.log('enter back')
                    },
                    onLeave: () => {
                        console.log('leave')
                        nextProject.current.style.display = 'flex'
                    },
                }
            })

            gsap.to(whiteSquare.current, {
                height: '100vh',
                width: '100vw',
                scrollTrigger: {
                    trigger: whiteSquareContainer.current,
                    start: 'center center',
                    scrub: 1,
                    end: "+=400",
                },
            })

            gsap.to(mockUpContainer.current, {
                scrollTrigger: {
                    trigger: whiteSquareContainer.current,
                    start: 'center center',
                    scrub: 1,
                    end: "+=800",
                },
                keyframes: {
                    "0%":   { top: '50vh', left: '50vw', width: 0, height: 0},
                    "50%":  { top: '50vh', left: '50vw', width: 0, height: 0},
                    "100%": { top: 0, left: 0, width: '100vw', height: '100vh'},
                   },
            })

        }, firstBg, firstFont, logoU, logoNion, logoHookah, topMotionText, centerMotionText)

        return () => {ctx.revert()}
    }
    ,[firstBg, firstFont, overflowFont, logoU, logoNion, logoHookah, topMotionText, centerMotionText, blackSquareContainer, blackSquare, sitePage, whiteSquareContainer, whiteSquare, mockUpContainer, nextProject])



    return (
        <><div className={cl.content}>
            <Welcome toMain={toMain} />

            <section ref={themeTrigger} className={cl.section1}>
                <div ref={firstBg} className={cl.unionFirstBg}></div>
                <div ref={firstFont} className={cl.unionFirstFont}></div>
                <div ref={overflowFont} className={cl.unionFirstTopFont}></div>
                <div ref={leftDudka} className={cl.leftDudka}></div>
                <div ref={rightDudka} className={cl.rightDudka}></div>
            </section>
            
            <section className={cl.section2}>
                <div ref={logoU} className={cl.logoU}></div>
                <div ref={logoNion} className={cl.logoNion}></div>
                <div ref={logoHookah} className={cl.logoHookah}></div>
            </section>

            <section className={cl.section3}>
                <div ref={bags} className={cl.bags}></div>
                <div ref={topMotionText} className={cl.topMotionText}></div>
                <div ref={centerMotionText} className={cl.centerMotionText}></div>
            </section>
            
            <section className={cl.section4}>
                <div ref={blackSquareContainer} className={cl.blackSquareContainer}>
                    <div ref={blackSquare} className={cl.blackSquare}>
                        <div style={{ backgroundColor: '#fff' }} className={cl.logo}></div>
                    </div>
                    <div ref={sitePage} className={cl.sitePage}></div>
                </div>
            </section>
        
            <section className={cl.section5}>
                <div ref={whiteSquareContainer} className={cl.whiteSquareContainer}>
                    <div ref={whiteSquare} className={cl.whiteSquare}>
                        <div style={{ backgroundColor: '#000' }} className={cl.logo}></div>
                    </div>
                    <div ref={mockUpContainer} className={cl.mockUpContainer}>
                        <div className={cl.mockUpBook}></div>
                    </div>
                </div>
            </section>
            

            <div ref={nextProject} className={cl.nextProject}>
                <h2 className='nextProjectBtn' onClick={isMobile ? () => navigate('/audi') : toNextProject}><p>NEXT PROJECT</p></h2>
            </div>
        {nextProjectEl}
        </div><TransitionDiv color={isMobile ? '#0D2805' : '#0F1010'} ref={transitionDiv} /></>
    )
}

export default HookahPage