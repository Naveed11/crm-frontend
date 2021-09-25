import React from 'react'
import {Form,Row,Col} from 'react-bootstrap';
const SearchForm = ({handleOnChange,str}) => {
    return (
        <div>
            <Form>
                <Form.Group as ={Row}>
                    <Form.Label column sm={3} md={2}>Search:</Form.Label>
                    <Col sm={9} md={6}>
                        <Form.Control name="searchStr" placeholder="Search" onChange={handleOnChange} value={str} />
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default SearchForm
