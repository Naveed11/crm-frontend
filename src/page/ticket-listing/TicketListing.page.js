import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap';
import PageBreadcrumb from '../../components/Layout/Breadcrumb';
import SearchForm from '../../components/Layout/SearchForm.comp';
import TicketTable from '../../components/Layout/TicketTable.comp';
import data from '../../assets/data.json';
const TicketListing = () => {
    const [str,setStr] = useState();
    const [dispTickets,setDispTickets] = useState(data);
    useEffect(() => {}, [str,dispTickets])
    const handleOnChange = e=>{
        setStr(e.target.value);
        searchTicket(e.target.value);
     }
    const searchTicket = sttr =>{
        const displayTickets = data.filter((row)=>row.Subject.toLowerCase().includes(sttr.toLowerCase()))
        setDispTickets(displayTickets);
    }
    return (
        <Container>
            {/* Breadcrumb */}
            <Row>
                <Col>
                <PageBreadcrumb page="Ticket Lists"/>
                </Col>
            </Row>
            {/* Breadcrumb */}

            {/* Add New Ticket Button & Search form */}
            <Row>
                <Col>
                <Button variant="info text-white mt-4 mb-2">Add New Ticket</Button>
                </Col>

                <Col className="text-right mt-4 mb-2">
                    <SearchForm handleOnChange={handleOnChange} str={str} />
                </Col>
            </Row>
            {/* Add New Ticket Button & Search form*/}
            <hr />
           
           <Row>
               <Col>
                <TicketTable data={dispTickets} />
               </Col>
           </Row>
        </Container>
    )
}

export default TicketListing
