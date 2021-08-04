import React from 'react'
// import Button from 'react-bootstrap/Button';
import { MyButton as Button } from './MyButton';
import Form from 'react-bootstrap/Form'

export default function SearchBar() {
    return (
        <div>
            <Form>
                <Form.Group controlId="forSearchQuery" className="d-flex">
                    <Form.Control type="search" placeholder="s e a r c h" />
                    <Button name="search" type="" />
                </Form.Group>
            </Form>
        </div>
    )
}
