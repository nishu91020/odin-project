import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getInvoice, deleteInvoice } from './data';
function Invoice () {
    const params = useParams();
    const navigate = useNavigate();
    let invoice = getInvoice(parseInt(params.invoiceid, 10));
    const handleDelete = () => {
        deleteInvoice(invoice.number);
        navigate('/invoice');
    };
    return invoice ? (
        <div>
            <h1>Invoice number:{invoice.number} </h1>
            <h1>Invoice name:{invoice.name} </h1>
            <h1>Invoice due:{invoice.due} </h1>
            <h1>Invoice amount:{invoice.amount} </h1>
            <button onClick={handleDelete}>Delete</button>
        </div>
    ) : (
        <div>No such invoice exist</div>
    );
}

export default Invoice;
