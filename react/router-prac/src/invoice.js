import React from 'react';
import { getInvoices } from './data';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import QueryNavLink from './QueryNavLink';
function Invoice () {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const invoices = getInvoices();
    return (
        <div>
            <h1>Invoice</h1>
            <input
                value={searchParams.get('filter') || ''}
                onChange={e => {
                    let filter = e.target.value;
                    if (filter) {
                        setSearchParams({ filter });
                    }
                    else {
                        setSearchParams({});
                    }
                }}
            />
            <br />
            {invoices
                .filter(invoice => {
                    let filter = searchParams.get('filter');
                    if (!filter) {
                        return true;
                    }
                    let name = invoice.name.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                })
                .map(invoice => {
                    return (
                        <div>
                            <QueryNavLink style={({ isActive }) => (isActive ? { color: 'red' } : { color: 'blue' })} key={invoice.number} to={`/invoice/${invoice.number}`}>
                                {invoice.name}
                            </QueryNavLink>
                            <br />
                        </div>
                    );
                })}
            <Outlet />
        </div>
    );
}

export default Invoice;
