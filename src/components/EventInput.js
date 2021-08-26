import React, { useState } from 'react'

function EventInput() {
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        body: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
    }

    return (
        <>
        <h1>Create an Event</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
                <input
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                value={formData.title}
                type="text"
                name="title"
                id="title"
                />
            <label htmlFor="date">/Date: </label>
                <input
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                value={formData.date}
                type="date"
                name="date"
                id="date"
                />
            <label htmlFor="body">Event Description: </label>
                <textarea
                onChange={(e) => setFormData({...formData, body: e.target.value})}
                value={formData.body}
                name="body"
                id="body"></textarea>
            <input type="submit" value="Submit" />
        </form>
        </>
    )
}

export default EventInput

// Need user logged in to use form && logged in as manager
// Need to create entry, then save in Firestore
// Need to edit/delete entry
// Display entry in AllEvents component