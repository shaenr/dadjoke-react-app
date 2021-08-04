import React, { useState, useEffect } from 'react'

import './Image.css'

export default function Image(props) {

    const [rendered, setRendered] = useState(false)

    const animateLing = () => {
        document.documentElement.style.setProperty(
            '--image', 
            'url("/img/ling-ani.webp") no-repeat 0 0')
    }

    useEffect( () => {
        if (!rendered) {
            animateLing();
            setRendered(true)
        }
    }, [rendered])

    return (
        <div class="ling-ani" style={{overflow: 'hidden'}} />
    )
}
