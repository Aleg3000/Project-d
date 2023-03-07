import { useEffect, useState } from "react"
import cl from './Loader.module.css'
import { imagesPreLoad, imagesAfterLoad } from "../../data/images"
import { useRef } from "react"
import gsap from "gsap"
import { TransitionDiv, useCustomTransition } from "../../hooks/useCustomTransition"

const Loader = ({setIsLoading}) => {

    const [percents, setPercents] = useState('0%')

    const progress = useRef()
    const container = useRef()
    const a = useRef()
    const b = useRef()
    

    const transition = useCustomTransition(b)

    const loadImages = () => {
        let i = 0

    imagesPreLoad.forEach((file, index) => {
        const image = new Image()
        image.onload = () => {
            i++
            setPercents(((i * 100) / imagesPreLoad.length).toFixed() + '%')
            if(i === imagesPreLoad.length) {
                setPercents('done')
                gsap.fromTo(a.current,
                    {
                        yPercent: 100,
                        opacity: 0,
                    },
                    {
                        yPercent: 0,
                        opacity: 1,
                        duration: 0.5,
                        onComplete: () => {
                            setTimeout(() => transition().finally(() => setIsLoading(false)), 1500)
                        }
                    })
            }
        }
        image.src = file
    })

    imagesAfterLoad.forEach(file => {
        const image = new Image()
        image.src = file
    })

    }

    useEffect(() => {
        document.querySelector('meta[name="theme-color"]').setAttribute("content", '#ffffff')
        gsap.registerPlugin()
        loadImages()
    }, [])

    return (
        <>
            <div ref={container} className={cl.container}>
                <div className={cl.progressContainer}>
                    <div ref={progress} className={cl.loading}>
                        <div>Project—</div>
                        <div ref={a}>{percents}</div>
                    </div>
                </div>
            </div>
            <TransitionDiv ref={b} />
        </>
        
    )
}

export default Loader