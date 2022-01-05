import React from 'react'

export default function Home() {
    let style = {
        listing: {
            borderBottom: "1px dotted gray",
            margin: "8px"
        }
    }
    return (
        <div className="container">
            <h1 className="text-center">Reading makes you perfect</h1>
            <div>
            Welcome to the book jungle. 
            </div>
            <div style={style.listing}>
                Clicking on search allows you to search any book by subject. 
                Eg. you type tree or sky or history.
            </div>
            <div style={style.listing}>
                Going to the task link, you will see tasks that are to be completed.
            </div>
        </div>
    )
}
