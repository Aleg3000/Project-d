import { useContext } from 'react'
import { createRef } from 'react'
import { useEffect } from 'react'
import { useLayoutEffect } from 'react'
import { MyContext } from '../../App'
import gsap from 'gsap'
import cl from './ProjectPage.module.css'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

const ProjectPage = () => {

    // gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to("[data-speed]", {
            y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window) ,
            ease: "none",
            scrollTrigger: {
              start: 200,
              end: "max",
              invalidateOnRefresh: true,
              scrub: 0,
              markers: true,
            },
          });

        return () => {} /* clean up */
    }
    ,[])

    return (
            <div className={cl.content}>
                    <div className={cl.projectImg}>
                        <h2>PORSCHE DAKAR, Testing</h2>
                    </div>
                    <div data-speed="0.8" className={cl.description}>
                    это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков
                    </div>
                    <div data-speed="0.9" className={cl.first}></div>
                    <div data-speed="1.1" className={cl.second}></div>
                    <div className={cl.third}></div>
                    <div className={cl.fourth}></div>
                    <div className={cl.next}>
                        <div className={cl.nextTitle}>next project</div>
                    </div>
            </div>
    )
}

export default ProjectPage