import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';

export default function Joke() {
    
    const [joke, setJoke] = useState({joke: "I couldn't get the app to initialize state. Click for a joke."})

    const fetchJoke = () => {
        const reqURL = 'https://icanhazdadjoke.com/'
        const reqHeaders = {headers: {Accept: 'application/json'}}

        axios.get(reqURL, reqHeaders)
        .then(res => setJoke(res.data))
        .catch(err => console.log(err))
    }

    useEffect( () => fetchJoke, []); // Pass in Array of States of Check For Updates On

    return (
        <div>
            <Card border="primary" bg="dark" 
                  style={{ width: '18rem' }}>
                <Card.Header as="h5" className="text-secondary bg-light">J O K E</Card.Header>
                <Card.Body>
                    {typeof joke !== 'undefined' &&
                        <Card.Text>
                            {joke.joke}
                        </Card.Text>
                    }
                    <Button
                        variant="primary"
                        size="md"
                        type='button' 
                        className="p-2 btn-secondary text-white btn-outline-primary btn-bl"
                        style={{background: '#30115e'}}
                        onClick={fetchJoke}>
                        <small>h a h a g i v e m o a r j o k e ! ! !</small>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}
