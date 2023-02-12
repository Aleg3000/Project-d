import cl from './MainCard.module.css'

const MainСard = ({cardInfo: {dataset, title, category, className, color}, index, slide: slideCard, open}) => {

    return (
        <div 
            onMouseEnter={(e) => slideCard.call(null, 'open', e.currentTarget, index, e, color)} 
            onMouseLeave={(e) => slideCard.call(null, 'close', e.currentTarget, index, e, color)}
            onClick={open} 
            className={[cl.card, cl[className]].join(' ')}
            data-page={dataset}
        >
            <h2>{title},<span> {category}</span></h2>
        </div>
    )
}

export default MainСard;