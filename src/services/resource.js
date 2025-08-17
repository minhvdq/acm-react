import axios from 'axios'

const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/eventHub/api/resource' : '/eventHub/api/resource'

export const getResources = async (eventId) => {
    const response = await axios.get(`${API_URL}/event/${eventId}`)
    return response.data
}