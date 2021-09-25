import React from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap';
import './dashboard.css';
import TicketTable from './TicketTable.comp';
import data from '../../assets/data.json';
import PageBreadcrumb from './Breadcrumb';
import {Link} from 'react-router-dom'
const Dashboard = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="Dashboard"/>
                </Col>
            </Row>
            <Row>
                <Col className="text-ceter mt-1 mb-2 addNewTicketDiv">
                    <Link to="/add-ticket">
                    <Button variant="info"  style={{padding:"10px 30px"}}>Add New Ticket</Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col className="text-center mt-2">
                    <div>Total Tickets: 50</div>
                    <div>Pending Tickets: 50</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <TicketTable data={data}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard
