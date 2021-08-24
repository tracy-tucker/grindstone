import React, { useState } from 'react'

function AllEvents() {

    const [text, setText] = useState('')

    return (
        <div>
            <div>
                <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div>
                I am an area to display events.
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

// A space to DISPLAY those entries to the user