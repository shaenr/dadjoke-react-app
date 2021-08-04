import React from 'react'

export default function Info() {
    return (
        <div class="container mt-3">
            <h2>Practing at React Stuff.</h2>

            <ul>
            <p className="text-white">That's all this app is. Some things to look at...</p>
            <li className="text-white">This app needs to initialize with fetched joke on first render without button click.</li>
            <li className="text-white"><s>Fixed the router problem.</s></li>
            <li className="text-white">The graphic of Ling should be much smaller on mobile screens.</li>
            <li className="text-white">Next time, I won't bother with react-bootstrap.</li>
            </ul>


            <h3>But that's basically it.</h3>

            <p className="text-white">I did this app to learn the basics of a better state management system for frontend code and to get away from jQuery ideally..</p>

            <p className="text-secondary">Feel free to look over the <a href="https://github.com/shaenr/dadjoke-react-app">code.</a></p>

        </div>
    )
}
