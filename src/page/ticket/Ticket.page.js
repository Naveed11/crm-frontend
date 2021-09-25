import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import PageBreadcrumb from '../../components/Layout/Breadcrumb'
import datas from '../../assets/data.json';

const data = datas[0];
const Ticket = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="Ticket"/>
                </Col>
            </Row>
            <Row>
            <Col>
                    <div className="subject">Subject : {data.Subject}</div>
                    <div className="date">Date : {data.Date}</div>
                    <div className="status">Status : {data.id}</div>
            </Col>
            <Col className="text-right">
                <Button variant="outline-info">Close Ticket</Button>
            </Col>
            </Row>
        </Container>
    )
}

export default Ticket
