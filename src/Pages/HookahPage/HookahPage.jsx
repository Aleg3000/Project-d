import cl from './HookahPage.module.css'
import { useEffect, createRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'


const HookahPage = () => {

    const firstBg = createRef();
    const firstFont = createRef();
    const leftDudka = createRef();
    const rightDudka = createRef();
    const overflowFont = createRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: firstBg.current,
                pin: true,
                start: "top 200px",
                end: "+=800",
                // markers: true
            });

            // gsap.from(firstBg.current, {
            //     // x: 100,
            //     scrollTrigger: {
            //         trigger: firstBg.current,
            //         scrub: true,
            //         start: "top 100px",
            //         end: "+=800",
            //         pin: true
            //     }
            // })

            gsap.from(firstFont.current, {
                x: '100vw',
                // opacity: 0,
                scrollTrigger: {
                    trigger: firstFont.current,
                    scrub: 1,
                    start: "top 200px",
                    end: "+=800",
                    pin: true
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

        }, firstBg, firstFont)
        





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
    ,[])

    return (
        <div className={cl.content}>
                    <div className={cl.projectImg}>
                        <h2>UNION HOOKAH, Packing</h2>
                    </div>
                    <div ref={firstBg} className={cl.unionFirstBg}></div>
                    <div ref={firstFont} className={cl.unionFirstFont}></div>
                    <div ref={overflowFont} className={cl.unionFirstTopFont}></div>
                    <div ref={leftDudka} className={cl.leftDudka}></div>
                    <div ref={rightDudka} className={cl.rightDudka}></div>
            </div>
    )
}

export default HookahPage