import axios from "axios";

const answerApi = {
    getContactAnswer() {
        return axios.get(`https://api.chucknorris.io/jokes/random`)
            .then(response => response)
            .catch((error) => {
                if (error.response) {
                    return error.response
                }
            })
    }
}

export default answerApi;