const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}

const getCountry = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch country')
        }
    }).then((data) => {
        const country = data.find((country) => country.alpha2Code === countryCode)
        if (country) {
            return country
        } else {
            throw new Error('Country code not found')
        }
    })
}

const getLocation = () => {
    return fetch('https://ipinfo.io/json?token=9b465d80ee3f50').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch IP location info')
        }
    })
}