import React, { useState } from 'react'

function EventInput() {
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        body: ""
    })
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [body, setBody] = useState("")

    return (
        <>
        <h1>Create an Event</h1>
        <form>
            <label htmlFor="title">Title: </label>
                <input type="text" name="title" id="title" />
            <label htmlFor="date">/Date: </label>
                <input type="date" name="date" id="date" />
            <label htmlFor="body">Event Description: </label>
                <textarea name="body" id="body"></textarea>
            <input type="submit" value="Submit" />
        </form>
        </>
    )
}

export default EventInput
