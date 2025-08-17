import axios from 'axios'

const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/eventHub/api/photo' : '/eventHub/api/photo'

export const getPhotos = async (eventId) => {
    const response = await axios.get(`${API_URL}/event/${eventId}`)
    return response.data
}