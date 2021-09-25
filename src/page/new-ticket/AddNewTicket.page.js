import React,{useState,useEffect} from 'react'
import PageBreadcrumb from '../../components/Layout/Breadcrumb'
import AddTicketForm from '../../components/Layout/addTicketForm.comp';
import {Container,Row,Col} from 'react-bootstrap';


const initialFormData = {
    subject:"",
    date:"",
    detail :"",
}
const AddNewTicket = () => {
    const [frmData,setFrmData] = useState(initialFormData)
    useEffect(() => {}, [frmData])
    const handleOnChange = e =>{
        const {name,value} = e.target;
        setFrmData({
            ...frmData,
            [name]:value,
        });
        console.log(name,value)
    }
    const handleOnSubmit = e=>{
        e.preventDefault();
        
    }
    return (
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="New Ticket"/>
                </Col>
            </Row>

            <Row>
                <Col>
                <AddTicketForm  handleOnChange={handleOnChange} frmData={frmData} handleOnSubmit={handleOnSubmit}/>
                </Col>
            </Row>
        </Container>
    )
}

export default AddNewTicket
