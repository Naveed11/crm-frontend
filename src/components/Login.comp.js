import React from 'react'

import {Container,Row,Col,Form,Button} from 'react-bootstrap'
const LoginForm = ({handleOnChange,email,password,handleOnSubmit,handleSwitcher}) => {
    return (
        <Container>
            <Row>
                <Col>
                <h1 className=" text-center">Client Login</h1>
                <Form autoComplete="off" onSubmit={handleOnSubmit}>
                    {/* Email */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleOnChange} value={email} />
                </Form.Group>
                {/* Email */}

                 {/* Password */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange= {handleOnChange} value= {password} />
                </Form.Group>
                {/* Password */}

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
                <Col><a href="#" onClick={()=>handleSwitcher()}>Forgot Password?</a></Col>    
            </Row>
        </Container>
    )
}


export default LoginForm
