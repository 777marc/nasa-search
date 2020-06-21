const axios = require('axios').default;

const baseUri = 'https://images-api.nasa.gov/search?q=';

const get = searchCriteria => {
    return axios.get(`${baseUri}${searchCriteria}`);
}

module.exports = {
    get
}

