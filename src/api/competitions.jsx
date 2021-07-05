export const getCompetitionsList = () => {

    let axios = require("axios").default;
    let options = {
        method: 'GET',
        url: 'http://api.football-data.org/v2/competitions/',
        headers: {
            'x-auth-token': 'b0cc176056174cd6bc7bfd20a5a11fd9',
        }
    }
    return axios.request(options).then((response) => {
        return response.data;
    })
}






