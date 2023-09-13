import cl from './MainCard.module.css'
import { createSubtitle } from '../../../functions/functions';

const MainСard = ({cardInfo: {dataset, title, category, className, color}, index, open}) => {
    return (
        <div 
            onClick={open} 
            className={[cl.card, cl[className]].join(' ')}
            data-page={dataset}
            data-index={index}
            data-color={color}
        >
            <h2>
                    {createSubtitle(title, cl.firstSpan, cl.titleSpan)}
                    {createSubtitle(category, cl.lastSpan, cl.titleSpan)}
            </h2>
        </div>
    )
}

export default MainСard;