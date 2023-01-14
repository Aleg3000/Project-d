import cl from './MainCard.module.css'

const MainСard = ({title, index, slide: slideCard, open}) => {

    return (
        <div 
            onMouseEnter={(e) => slideCard.call(null, 'open', e.currentTarget, index, e)} 
            onMouseLeave={(e) => slideCard.call(null, 'close', e.currentTarget, index, e)}
            onClick={open} 
            className={[cl.card, cl[`card${index + 1}`]].join(' ')}
        >
            <h2>{title}</h2>
        </div>
    )
}

export default MainСard;