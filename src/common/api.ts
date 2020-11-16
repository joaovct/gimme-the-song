import axios from 'axios'

const api = axios.create({baseURL: 'https://api.acoustid.org/v2/'})

export default api