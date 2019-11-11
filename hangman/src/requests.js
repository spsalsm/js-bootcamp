const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')

    if (response.status === 200) {
        const data = await response.json()
        const country = data.find((country) => country.alpha2Code === countryCode)
        if (country) {
            return country
        } else {
            throw new Error('Country code not found')
        }
    } else {
        throw new Error('Unable to fetch country')
    }
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=9b465d80ee3f50')

    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to get IP location info')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
}

export { getPuzzle as default }