import { useState, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import cardData from '../../data/cardsData';
import cardCl from '../../Pages/MainPage/MainPageMobile.module.css'

let currentCard = 0

const Carousel = ({className, children, main}) => {

    const navigate = useNavigate()

    const [colors, setColors] = useState([])

    const cont = useRef();

    const [startPos, setStartPos] = useState(0);

    const [lastTouch, setLastTouch] = useState(0);
    const [lastPos, setLastPos] = useState(0);

    const [touches, setTouches] = useState([])

    const [anchors, setAnchors] = useState([])

    function openCard(e) {
        const a = e.target.cloneNode(true)
        a.style.position = 'absolute'
        const { top, left, height} = e.target.getBoundingClientRect()
        a.style.top = top + 'px'
        a.style.left = left + 'px'
        a.style.height = height + 'px'
        document.body.appendChild(a)

        gsap.to(e.target, {
            margin: '0 15px',
            duration: 1})
        gsap.to(cont.current, {
            padding: '0 15px',
            duration: 1
        })

        gsap.to(`.${cardCl.titleSpan}`, {
            yPercent: 100,
            rotation: -3,
            duration: 0.5,
            stagger: 0.05,
            opacity: 0,
            ease: "power3.out",
        })

        const { dataset: { page } } = e.target

        gsap.to(a, { 
            width: '100vw',
            height: '100svh',
            top: 0,
            left: 0,
            delay: 1.5,
            duration: 0.3,
            onComplete: () => {
                navigate(page)
                document.querySelector('meta[name="theme-color"]').setAttribute("content", '#0F1010');
                setTimeout(() => a.remove(), 0);
            },
        })
}

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
        }
        cont.current.style.transform = `translateX(${lastTouch}px)`

        setLastTouch(lastTouch)

        setTouches((state) => [...state, {time: e.timeStamp, positionX: e.touches[0].clientX}])
    }

    const touchEnd = (e) => {
        const velocity = getVelocity2(touches)
        setTouches([])

        if (velocity === undefined) {
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
        gsap.registerPlugin()
        window.addEventListener('resize', () => setIsUpdated((state) => !state))

        getAnchors(cont.current)

        // setting container width depends on children quantity
        cont.current.style.width = `${children.length * 100}vw`

        setColors(cardData.map(card => card.color))

    }, [children.length])

    useEffect(() => {
        // setting new theme
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