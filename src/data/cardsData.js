import audiTitle from '../assets/audi/title.png'
import fontTitle from '../assets/font/title.png'
import fontTitleMobile from '../assets/font/title-mobile.png'
import hookahCatalogTitle from '../assets/union-hookah-catalog/title.jpg'

const cardData = [
    {
        title: 'UNION HOOKAH,',
        pathname: '/hookahCatalog',
        category: 'Catalog',
        color: '#C6C6C6',
        dataset: 'hookahCatalog',
        className: 'hookahCatalogCard',
        backgroundImage: hookahCatalogTitle
    },
    {
        title: 'UNION HOOKAH,',
        pathname: '/hookahBrand',
        category: 'Branding',
        color: '#0D2805',
        dataset: 'hookahBrand',
        className: 'hookahBrandCard',
    },
    // {
    //     title: '3D LETTERING',
    //     category: 'Lettering',
    //     color: '#7FA7A8',
    //     dataset: 'threeD',
    //     className: 'threeDCard',
    // },
    {
        pathname: '/audi',
        title: 'AUDI QUATTRO DAYS,',
        category: 'Key visual',
        color: '#E5291F',
        dataset: 'audi',
        className: 'audiCard',
        backgroundImage: audiTitle,
    },
    {
        title: 'OUCE,',
        pathname: '/font',
        category: 'Type',
        color: '#46442D',
        dataset: 'font',
        className: 'fontCard',
        backgroundImage: fontTitle,
        backgroundImageMobile: fontTitleMobile
    },
]

export default cardData