import React from 'react'
import EventDisplay from './EventDisplay'
import EventInput from './EventInput'


function AllEvents() {

    return (
        <div>
            <div>
                <EventInput />
            </div>
            <div>
                <EventDisplay />
            </div>
        </div>
    )
}

export default AllEvents

// What I want:
// Input field to enter in Event data
    // Event Name
    // Event Date
    // Devent Description

// A space to DISPLAY submitted events to the user
// A way to EDIT submitted events
// a way to DELETE submitted events