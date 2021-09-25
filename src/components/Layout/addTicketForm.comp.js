import React from 'react'
import {Form,Jumbotron,Button,Row,Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';
import '../../App.css';
const AddTicketForm = ({handleOnChange,frmData,handleOnSubmit}) => {
    return (
       <Jumbotron className="mt-5 add-new-ticket-Form">
            <h1 className=" text-center text-info ">Add New Ticket</h1>
            <Form autoComplete="off"   onSubmit = {handleOnSubmit}>
                {/* Subject */}
            <Form.Group className="mb-3 mx-auto" as ={Row}>
                <Form.Label column sm={2}>Subject</Form.Label>
                <Col sm={9} >
                    <Form.Control type="text" required onChange = {handleOnChange} value={frmData.subject} placeholder="Enter Subject" name="subject"  />
                </Col>
            </Form.Group>
            {/* Subject */}

             {/* Date */}
            <Form.Group className="mb-3 mx-auto"  as={Row}>
                <Form.Label column sm={2}>Date</Form.Label>
                <Col sm={9} >
                <Form.Control type="date" required onChange = {handleOnChange} value={frmData.date}  name="date"  />
                </Col>
            </Form.Group>
            {/* Date */}

             {/* Details */}
             <Form.Group className="mb-3 mx-auto"  as={Row}>
                <Form.Label column sm={2}>Details</Form.Label>
                <Col sm={9}>
                <Form.Control type="textarea" required onChange = {handleOnChange} value={frmData.detail}   placeholder="Enter Detail" name="detail"  />
                </Col>
            </Form.Group>
            {/* Details */}


            {/* Button */}
            <div className="text-center">
           <Button variant="info"  className="text-white col-sm-4" block  type="submit">
                Add
            </Button>
            </div>
            {/* Button */}

            </Form>
            <hr />
            </Jumbotron>
    )
}

export default AddTicketForm

AddTicketForm.prototype ={
handleOnChange: PropTypes.func.isRequired,
frmData : PropTypes.object.isRequired
}
