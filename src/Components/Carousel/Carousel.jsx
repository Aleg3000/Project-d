import { createRef, useState, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap'

let currentCard = 0

const Carousel = ({className, children, main}) => {

    const colors = ['#B15000', '#CE5033', '#7FA7A8', '#C22E20', 'lime']

    const cont = createRef();

    const [startPos, setStartPos] = useState(0);

    const [lastTouch, setLastTouch] = useState(0);
    const [lastPos, setLastPos] = useState(0);

    const [touches, setTouches] = useState([])

    const [anchors, setAnchors] = useState([])

    const getVelocity = (touches) => {
        if (touches.length < 2) return
        const startTime = touches.time
        const endTime = touches.at(-1).time

        const startPosX = touches[0].positionX
        const finishPosX = touches.at(-1).positionX

        const velocity = (finishPosX - startPosX) / (endTime - startTime)

        return velocity
    }

    const getVelocity2 = (touches) => {
        if (touches.length < 3) return
        const startTime = touches.at(-3).time
        const endTime = touches.at(-1).time

        const startPosX = touches.at(-3).positionX
        const finishPosX = touches.at(-1).positionX

        const velocity = (finishPosX - startPosX) / (endTime - startTime)

        return velocity
    }

    const touchStart = (e) => {
        const startPos = e.touches[0].clientX
        setStartPos(startPos)
    }

    const touchMove = (e) => {
        const currentPos = e.touches[0].clientX
        const diff = (startPos - currentPos).toFixed(2)
        let lastTouch = -lastPos - diff
        if (lastTouch > 0 || lastTouch < -anchors.at(-1)) {
            lastTouch = -lastPos - diff * 0.4  
            // сделать 0.3 наверн или 0.5 ваще
        }
        cont.current.style.transform = `translateX(${lastTouch}px)`

        setLastTouch(lastTouch)

        setTouches((state) => [...state, {time: e.timeStamp, positionX: e.touches[0].clientX}])
    }

    const touchEnd = () => {
        const velocity = getVelocity2(touches)
        setTouches([])

        if (velocity === undefined) {
            // здесь можно открывать проект
        }
        else if (Math.abs(velocity) > 0.1) {
            currentCard += velocity < 0 ? 1 : -1
            if (currentCard < 0) currentCard = 0
            if (currentCard >= anchors.length) currentCard = anchors.length - 1
        } else {
            let min = 10000
            let next
            anchors.forEach((el, i) => {
                const diff = Math.abs(Math.abs(lastTouch) - el)
                if (diff < min) {
                    min = diff
                    next = i
                }
            })
            currentCard = next
        }
        
        getToPoint(cont.current, velocity, anchors[currentCard])  
    }

    const getToPoint = (cont, velocity, finalPosition) => {
        gsap.fromTo(cont,
            {transform: `translateX(${lastTouch}px)`}, 
            {transform: `translateX(${-finalPosition}px)`,
            duration: 0.2,
            ease: Math.abs(velocity) > 3 ? "back.out(3)" : "power2.out"
        })
        gsap.to(main.current, {
            backgroundColor: colors[currentCard],
            onUpdate: () => {
                document.querySelector('meta[name="theme-color"]').setAttribute("content", main.current.style.backgroundColor);
            }
        })
        setLastPos(finalPosition)
        setLastTouch(-finalPosition)
    }

    const getAnchors = (cont) => {
        const anchors = [...cont.children].map(el => el.offsetLeft - 30 /* left padding */)
        setAnchors(anchors)
    }

    function update() {
        getAnchors(cont.current)
        console.log('resize')
        cont.current.style.transform = `translateX(${-anchors[currentCard]}px)`
        setLastPos(anchors[currentCard])
        setLastTouch(-anchors[currentCard])
    }

    const [isUpdated, setIsUpdated] = useState(false)

    useLayoutEffect(() => {
        window.addEventListener('resize', () => setIsUpdated((state) => !state))

        getAnchors(cont.current)

        // setting container width depend on children quantity
        // можно это оставить в лэйауте, а остальное в обычном, как варик
        cont.current.style.width = `${children.length * 100}vw`

    }, [])

    useEffect(() => {
        // setting new theme
        document.querySelector('meta[name="theme-color"]').setAttribute("content", colors[currentCard]);

        if (main.current) main.current.style.backgroundColor = colors[currentCard]
    }, [])

    useLayoutEffect(update, [isUpdated])

    return (
            <div 
                onTouchStart={touchStart} 
                onTouchMove={touchMove}
                onTouchEnd={touchEnd}
                ref={cont} className={className}>
                    {children}
            </div>
    )
}

export default Carousel