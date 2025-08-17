import axios from 'axios'

const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/eventHub/api/events' : '/eventHub/api/events'
// const API_URL = 'http://localhost:3000/eventHub/api/events'

export const getEvents = async () => {
    // console.log("import.meta.env.NODE_ENV: " + import.meta.env.NODE_ENV)
    // console.log("API_URL: " + API_URL)
    const response = await axios.get(API_URL)
    return response.data
}