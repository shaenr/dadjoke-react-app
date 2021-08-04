import React from 'react'
import Container from 'react-bootstrap/Container'

import Joke from '../Joke'
import Image from '../Image'

export default function Content() {
    return (
        <div className="mt-4">
            <Container className="mx-auto">
                <Joke />
            </Container>

            <Container>
                <Image />
            </Container>
        </div>
    )
}
