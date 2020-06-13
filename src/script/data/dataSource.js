class DataSource {
    static searchTracks(keyword) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${keyword}&limit=20`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.data) {
                    return Promise.resolve(responseJson.data);
                } else {
                    return Promise.reject(`${keyword} is not found`)
                }
            })
    }
}

export default DataSource;