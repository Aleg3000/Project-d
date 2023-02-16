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
                    ref.current.style.display = 'block'
                    gsap.to(ref.current, {
                        duration: 1,
                        // delay: 1,
                        keyframes: {
                            "0%":   { transform: 'skewY(0deg) translate(-25%, 100%)'},
                            "50%":  { transform: 'skewY(10deg) translate(-25%, 40%)'},
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