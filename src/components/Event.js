import React, { useState } from 'react'

function Event() {

    const [text, setText] = useState('')
    console.log(text)

    return (
        <div>
            <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
        </div>
    )
}

export default Event
