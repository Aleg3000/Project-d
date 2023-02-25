import gsap from "gsap"
import { forwardRef } from "react"

const TransitionDiv = forwardRef( ({ color = '#0F1010' }, ref) => {
    return (
        <div ref={ref} style={ {backgroundColor: color}} className="transitionDiv"></div>
    )
})


const useCustomTransition = (ref) => {
    return () => {
                return new Promise((resolve, reject) => {
                    document.body.style.overflowY = 'hidden'
                    ref.current.style.display = 'block'

                    const angle = Math.sign(Math.random() - 0.5) * 10

                    gsap.to(ref.current, {
                        duration: 1,
                        keyframes: {
                            "0%":   { transform: 'skewY(0deg) translate(-25%, 100%)'},
                            "50%":  { transform: `skewY(${angle}deg) translate(-25%, 40%)`},
                            "100%": { transform: 'skewY(0deg) translate(-25%, 0%)'},
                            easeEach: 'none',
                            ease: 'power1.out',
                        },
                        onComplete: () => resolve()
                    })
                })
                
    }
}

export { TransitionDiv, useCustomTransition }