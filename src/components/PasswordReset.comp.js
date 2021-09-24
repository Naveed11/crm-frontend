import React from 'react'

import {Container,Row,Col,Form,Button} from 'react-bootstrap'
const PasswordResetForm = ({handleOnChange,email,password,handleOnResetPassword,handleSwitcher}) => {
    return (
        <Container>
            <Row>
                <Col>
                <h1 className=" text-center">Reset Password</h1>
                <Form autoComplete="off" onSubmit={handleOnResetPassword}>
                {/* Email */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleOnChange} value={email} />
                </Form.Group>
                {/* Email */}

                {/* Button */}
                    <Button variant="primary" type="submit">
                    Submit
                </Button>
                {/* Button */}

                </Form>
                <hr />
                </Col>
            </Row>

            <Row>
                <Col><a href="#" onClick={()=>{handleSwitcher('login')}} >Login Now !</a></Col>    
            </Row>
        </Container>
    )
}


export default PasswordResetForm
