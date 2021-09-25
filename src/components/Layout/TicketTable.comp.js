import React from 'react'
import {Table} from 'react-bootstrap';
const TicketTable = ({data}) => {
    return (
        <Table className="mt-5 mb-2" striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Status</th>
                    <th>Open Date</th>
                </tr>
            </thead>

            <tbody>
               {
                    data.length ? data.map((row)=>(
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.Subject}</td>
                            <td>{row.Date}</td>
                    </tr>
                    )): "Record not found"
                }
            
            </tbody>
        </Table>
    )
}

export default TicketTable
