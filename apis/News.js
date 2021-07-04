import axios from 'axios'

export default axios.create({
    baseURL: 'https://mee-farm.herokuapp.com/api/v1/'
})