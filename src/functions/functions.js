import { createElement } from 'react'

const createWord = (text, index, className) => {
    return createElement('p', {className, key: index}, `${text} `)
}

const createSubtitle = (text, className) => text.split(' ').map((text, index, arr) => {
    return createWord(text, index, className)
})

export { createSubtitle }