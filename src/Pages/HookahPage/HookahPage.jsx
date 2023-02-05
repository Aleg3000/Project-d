import cl from './HookahPage.module.css'
import { useEffect, createRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import { useLayoutEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import { useNavigate } from 'react-router-dom'


const HookahPage = () => {

    const navigate = useNavigate()

    // useLayoutEffect(() => {
    //     const GlobalStyles = createGlobalStyle`
    //         html {
    //             --color-text: black;
    //             --color-background: white;
    //             --color-primary: rebeccapurple;
    //         }
    //         `;
    // })

    const firstBg = createRef()
    const firstFont = createRef()
    const leftDudka = createRef()
    const rightDudka = createRef()
    const overflowFont = createRef()

    const logoU = createRef()
    const logoNion = createRef()
    const logoHookah = createRef()

    const bags = createRef()
    const topMotionText = createRef()
    const centerMotionText = createRef()

    const blackSquareContainer = createRef()
    const blackSquare = createRef()
    const sitePage = createRef()

    const whiteSquareContainer = createRef()
    const whiteSquare = createRef()
    const mockUpContainer = createRef()

    const nextProject = createRef()

    useLayoutEffect(() => {

        window.scrollTo(0, 0)
        
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: firstBg.current,
                pin: true,
                start: "top 200px",
                end: "+=800",
                // markers: true
            });

            gsap.from(firstFont.current, {
                x: '100vw',
                // opacity: 0,
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
                // opacity: 0,
                scrollTrigger: {
                    trigger: overflowFont.current,
                    scrub: 1,
                    start: "top 200px",
                    end: "+=800",
                    pin: true
                }
            })

            gsap.from(logoU.current, {
                x: '40rem',
                duration: 0.6,
                // repeat: -1,
                // repeatDelay: 3,
                scrollTrigger: {
                    trigger: logoU.current,
                    start: '25% center',
                    // markers: true,
                    toggleActions: 'play reset play reset'
                }
            })
            gsap.from(logoNion.current, {
                x: '100vw',
                duration: 0.7,
                // ease: "back.out(1.2)",
                // repeat: -1,
                // repeatDelay: 3,
                scrollTrigger: {
                    trigger: logoU.current,
                    start: '25% center',
                    toggleActions: 'play reset play reset'
                }
            })
            gsap.from(logoHookah.current, {
                x: '100vw',
                delay: 1,
                duration: 0.7,
                ease: "back.out(1.7)",
                // repeat: -1,
                // repeatDelay: 3,
                scrollTrigger: {
                    trigger: logoU.current,
                    start: '25% center',
                    toggleActions: 'play reset play reset'
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
                    // markers: true
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
                    // toggleActions: 'play reverse play reverse',
                    // scrub: 1,
                    end: "+=1000",
                    pin: true,
                    // markers: true
                }
            })

            gsap.to(blackSquare.current, {
                height: '100vh',
                width: '100vw',
                scrollTrigger: {
                    trigger: blackSquareContainer.current,
                    start: 'center center',
                    // toggleActions: 'play reverse play reverse',
                    scrub: 1,
                    end: "+=400",
                },
            })

            gsap.to(sitePage.current, {
                scrollTrigger: {
                    trigger: blackSquareContainer.current,
                    start: 'center center',
                    // toggleActions: 'play reverse play reverse',
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
                    // toggleActions: 'play reverse play reverse',
                    // scrub: 1,
                    end: "+=1000",
                    pin: true,
                    // onEnter: () => console.log('enter'),
                    onEnterBack: () => {
                        nextProject.current.style.display = 'none'
                        console.log('enter back')
                    },
                    onLeave: () => {
                        console.log('leave')
                        nextProject.current.style.display = 'flex'
                    },
                    // onLeaveBack: () => console.log('leave back'),
                    markers: true
                }
            })

            // gsap.to(nextProject.current, {
            //     scrollTrigger: {
            //         trigger: whiteSquareContainer.current,
            //         start: 'center center',
            //         end: '+=2000',
            //         pin: true,
            //         markers: true,
            //     }
            // })

            // ScrollTrigger.create({
            //     trigger: nextProject.current,
            //     pin: true,
            //     start: 'center center',
            //     end: '+=2000',
            //     markers: true
            // });

            gsap.to(whiteSquare.current, {
                height: '100vh',
                width: '100vw',
                scrollTrigger: {
                    trigger: whiteSquareContainer.current,
                    start: 'center center',
                    // toggleActions: 'play reverse play reverse',
                    scrub: 1,
                    end: "+=400",
                },
            })

            gsap.to(mockUpContainer.current, {
                scrollTrigger: {
                    trigger: whiteSquareContainer.current,
                    start: 'center center',
                    // toggleActions: 'play reverse play reverse',
                    scrub: 1,
                    end: "+=800",
                },
                keyframes: {
                    "0%":   { top: '50vh', left: '50vw', width: 0, height: 0},
                    "50%":  { top: '50vh', left: '50vw', width: 0, height: 0},
                    "100%": { top: 0, left: 0, width: '100vw', height: '100vh'},
                   },
                // onStart: () => {
                //     console.log('hi')
                //     nextProject.current.style.display = 'flex'}
            })

        }, firstBg, firstFont, logoU, logoNion, logoHookah, topMotionText, centerMotionText)
        





        // gsap.to("[data-speed]", {
        //     y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window) ,
        //     ease: "none",
        //     scrollTrigger: {
        //       start: 200,
        //       end: "max",
        //       invalidateOnRefresh: true,
        //       scrub: 0,
        //       markers: true,
        //     },
        //   });

        return () => {ctx.revert()} /* clean up */
    }
    ,[firstBg, firstFont, overflowFont, logoU, logoNion, logoHookah, topMotionText, centerMotionText, blackSquareContainer, blackSquare, sitePage, whiteSquareContainer, whiteSquare, mockUpContainer])



    return (
        <div className={cl.content}>
                    <div className={cl.welcomeSection}>
                        <div onClick={() => navigate('/')} className={cl.titleBtn}>Project-d</div>
                        <h2>UNION HOOKAH,<span> Branding</span></h2>
                        <div className={cl.welcomeLogo}></div>
                    </div>
                    

                    <div ref={firstBg} className={cl.unionFirstBg}></div>
                    <div ref={firstFont} className={cl.unionFirstFont}></div>
                    <div ref={overflowFont} className={cl.unionFirstTopFont}></div>
                    <div ref={leftDudka} className={cl.leftDudka}></div>
                    <div ref={rightDudka} className={cl.rightDudka}></div>

                    <div ref={logoU} className={cl.logoU}></div>
                    <div ref={logoNion} className={cl.logoNion}></div>
                    <div ref={logoHookah} className={cl.logoHookah}></div>

                    <div ref={bags} className={cl.bags}></div>
                    <div ref={topMotionText} className={cl.topMotionText}></div>
                    <div ref={centerMotionText} className={cl.centerMotionText}></div>


                    <div ref={blackSquareContainer} className={cl.blackSquareContainer}>
                        <div ref={blackSquare} className={cl.blackSquare}>
                            <div style={{backgroundColor: '#fff'}} className={cl.logo}></div>
                        </div>
                        <div ref={sitePage} className={cl.sitePage}></div>
                    </div>

                    <div ref={whiteSquareContainer} className={cl.whiteSquareContainer}>
                        <div ref={whiteSquare} className={cl.whiteSquare}>
                            <div style={{backgroundColor: '#000'}} className={cl.logo}></div>
                        </div>
                        <div ref={mockUpContainer} className={cl.mockUpContainer}>
                            <div className={cl.mockUpBook}></div>
                        </div>
                    </div>

                    <div ref={nextProject} className={cl.nextProject}>
                        <div onClick={() => navigate('/audi')}>next project</div>
                    </div>
                    
            </div>
    )
}

export default HookahPage