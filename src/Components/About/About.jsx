import cl from './About.module.css'

const About = ({refA}) => {
    return (
        <div ref={refA} className={cl.aboutContainer}>
            <div className={cl.aboutCard + ' ' + cl.active}><div>About us</div></div>
            <div className={cl.aboutCard}><div>Contacts</div></div>
        </div>
    )
}

export default About