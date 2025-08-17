import {useEffect, useState} from 'react'
import {getEvents} from '../../services/event'
import {message} from 'antd'

export default function NewEventPage() {
    const [events, setEvents] = useState([])
    useEffect(() => {
        getEvents().then(events => {
            console.log(events)
            setEvents(events)
        }).catch(e =>{
            console.log("e: " + e)
            message.error('Failed to fetch events')
        })
    }, [])
    return (
        <div>
            {
                events.map(event => (
                    <div key={event.id}>
                        <h1>{event.name}</h1>
                        <p>{event.description}</p>
                        <img src={event.poster} alt={event.name} />
                    </div>
                ))
            }
        </div>
    )
}