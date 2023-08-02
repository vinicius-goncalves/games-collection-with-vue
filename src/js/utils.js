export {
    formatObjectKey,
    filterObjectByKey
}

function formatObjectKey(key) {

    const matchUnderlines = /[_]/gi
    const matchLowerCaseChars = /(\b[a-z])/g

    const keyWithoutUnderlines = key.replace(matchUnderlines, ' ')
    const formattedKey = keyWithoutUnderlines.replace(matchLowerCaseChars, (char) => char.toUpperCase())

    return formattedKey
}

function filterObjectByKey(obj, ...keys) {

    const currGameEntries = Object.entries(obj)

    const filterByKey = ([ key ]) => keys.includes(key)
    const filteredData = currGameEntries.filter(filterByKey)

    const reduceToObject = (acc, [ key, value ]) => (acc[formatObjectKey(key)] = value) && acc
    const formattedGame = filteredData.reduce(reduceToObject, {})

    return formattedGame
}
