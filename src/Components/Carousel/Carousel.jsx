import { useState, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import cardData from '../../data/cardsData';

let currentCard = 0

const Carousel = ({className, children, main}) => {

    const navigate = useNavigate()

    // const colors = ['#C6C6C6', '#0D2805', '#7FA7A8', '#E5291F', '#46442D']

    const [colors, setColors] = useState([])

    const cont = useRef();

    const [startPos, setStartPos] = useState(0);

    const [lastTouch, setLastTouch] = useState(0);
    const [lastPos, setLastPos] = useState(0);

    const [touches, setTouches] = useState([])

    const [anchors, setAnchors] = useState([])

    // const getVelocity = (touches) => {
    //     if (touches.length < 2) return
    //     const startTime = touches.time
    //     const endTime = touches.at(-1).time

    //     const startPosX = touches[0].positionX
    //     const finishPosX = touches.at(-1).positionX

    //     const velocity = (finishPosX - startPosX) / (endTime - startTime)

    //     return velocity
    // }

    const getVelocity2 = (touches) => {
        // if (touches.length < 2) return 'click'
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

    const touchEnd = (e) => {
        const velocity = getVelocity2(touches)
        setTouches([])

        if (velocity === undefined) {
            function openCard(e) {
                const a = e.target.cloneNode(true)
                a.style.position = 'absolute'
                a.style.top = e.target.getBoundingClientRect().top + 'px'
                a.style.left = e.target.getBoundingClientRect().left + 'px'
                a.style.height = e.target.getBoundingClientRect().height + 'px'
                document.body.appendChild(a)

                const { dataset: { page } } = e.target

                gsap.to(a, { 
                    // width: '100vw', height: '100vh', top: '0', left: '0', borderRadius: '0',
                    duration: 2,
                    onComplete: () => {
                        console.log(page)
                        navigate(page)
                        document.querySelector('meta[name="theme-color"]').setAttribute("content", '#0F1010');
                        setTimeout(() => a.remove(), 0);
                    },
                    keyframes: {
                        '0%': {width: a.style.width, height: a.style.height, top: a.style.top, left: a.style.left, borderRadius: '10px'},
                        '50%': {width: '100vw', height: a.style.height, top: a.style.top, left: 0, borderRadius: '10px'},
                        '100%': {width: '100vw', height: '100vh', top: '0', left: '0', borderRadius: '0',}
                    }
                })
        }
            // здесь можно открывать проект

            openCard(e)
            return
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
    }

    useEffect(() => {
        cont.current.style.transform = `translateX(${-anchors[currentCard]}px)`

        setLastPos(anchors[currentCard])
        setLastTouch(-anchors[currentCard])
    }, [anchors])

    const [isUpdated, setIsUpdated] = useState(false)

    useLayoutEffect(() => {
        window.addEventListener('resize', () => setIsUpdated((state) => !state))

        // document.body.style.overflow = 'hidden'

        getAnchors(cont.current)

        // setting container width depends on children quantity
        // можно это оставить в лэйауте, а остальное в обычном, как варик
        cont.current.style.width = `${children.length * 100}vw`

        setColors(cardData.map(card => card.color))

    }, [])

    useEffect(() => {
        // setting new theme
        // console.log(currentCard)
        document.querySelector('meta[name="theme-color"]').setAttribute("content", colors[currentCard]);

        if (main.current) main.current.style.backgroundColor = colors[currentCard]
    }, [colors])

    useEffect(update, [isUpdated])

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