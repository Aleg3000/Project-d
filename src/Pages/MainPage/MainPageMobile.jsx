import cl from './MainPageMobile.module.css'
import { createRef, useState, useEffect } from 'react';
import gsap from 'gsap'

let currentCard = 0

let lastPos = 0

let lastTouch = 0

const MainPageMobile = () => {

    const cont = createRef();

    const [startPos, setStartPos] = useState(0);
    const [diff, setDiff] = useState(0);

    // const [lastPos, setLastPos] = useState(0)

    const [touches, setTouches] = useState([])

    const [anchors, setAnchors] = useState([])

    const getVelocity = (touches) => {
        if (touches.length < 2) return
        const startTime = touches[0].time
        const endTime = touches.at(-1).time

        const startPosX = touches[0].positionX
        const finishPosX = touches.at(-1).positionX

        const velocity = (finishPosX - startPosX) / (endTime - startTime)

        return velocity
    }

    const touchStart = (e) => {
        // console.log('touchStart', lastPos)
        const startPos = e.touches[0].clientX
        setStartPos(startPos)
        setDiff(0)
    }

    const touchMove = (e) => {
        // console.log(e)
        // console.log('touchMove', lastPos)
        const currentPos = e.touches[0].clientX
        const diff = (startPos - currentPos).toFixed(0)
        let a = -lastPos - diff
        if (a > 0 || a < -anchors.at(-1)) {
            console.log('oops')
            console.log(a)
            a = -lastPos - diff * 0.4  
            // сделать 0.3 наверн или 0.5 ваще
        }
        cont.current.style.transform = `translateX(${a}px)`
        // setDiff(diff);
        // lastTouch = -lastPos - diff
        lastTouch = a
        setTouches((state) => [...state, {time: e.timeStamp, positionX: e.touches[0].clientX}])
    }

    const touchEnd = (e) => {
        // console.log(cont.current)
        lastPos = -parseFloat(cont.current.style.transform.split('translateX(')[1]
                            || cont.current.style.transform.split('translate(')[1]
                            || cont.current.style.transform.split('translate3d(')[1]
                            || 0)
        // console.log(cont.current.style.transform)
        // console.log('touchEnd', lastPos )
        // setLastPos(lastPos)
        const velocity = getVelocity(touches)
        setTouches([])

        if (!velocity) return
        

        currentCard += velocity < 0 ? 1 : -1
        if (currentCard < 0) currentCard = 0
        if (currentCard >= anchors.length) currentCard = anchors.length - 1

        getToPoint(cont.current, velocity, anchors[currentCard])
        
        // console.log('touchEnd', lastPos )
        
    }

    const getAnchors = (cont) => {
        const anchors = [...cont.children].map(el => el.offsetLeft - 30 /* left padding */)
        setAnchors(anchors)
    }

    const getToPoint = (cont, velocity, finalPosition) => {
        gsap.fromTo(cont,
            {transform: `translateX(${lastTouch}px)`}, 
            {transform: `translateX(${-finalPosition}px)`,
            duration: 0.3,
            onUpdate: () => {
                // console.log(cont.style.transform)
            }})
        lastPos = finalPosition



        // if (Math.abs(lastPos) - finalPosition < 20 && Math.abs(lastPos) - finalPosition > 0) {
        //     cont.style.transform = `translateX(${-finalPosition}px)`
        //     return
        // }
        // window.requestAnimationFrame(getToPoint.bind(null, cont, velocity, finalPosition));
        // const newPos = lastPos + velocity
        // lastPos = newPos

        // cont.style.transform = `translateX(${newPos}px)`

    }

    useEffect(() => {
        // window.addEventListener('resize', () => {
        //     getAnchors(cont.current)
        //     console.log('resize')
        //     gsap.to(cont, {
        //         transform: `translateX(${anchors[currentCard]}px)`, 
        //     })
        // })
        getAnchors(cont.current)
    }, [])



    useEffect(() => {
        // cont.current.style.transform = `translateX(${lastPos - diff.toFixed(0)}px)`
    }, [startPos, diff])

    return (
        <main className={cl.main}>
            <div className={cl.title}>Project-d</div>
            <div className={cl.cardVisibleContainer}>
                <div 
                onTouchStart={touchStart} 
                onTouchMove={touchMove}
                onTouchEnd={touchEnd}
                // onMouseMove={(e) => console.log(e)}
                ref={cont} className={cl.cardContainer}>
                    <div className={cl.card}></div>
                    <div className={cl.card}></div>
                    <div className={cl.card}></div>
                    <div className={cl.card}></div>
                    <div className={cl.card}></div>
                </div>
            </div>
            <div className={cl.aboutBtn}>About Us</div>
        </main>
    )
}

export default MainPageMobile