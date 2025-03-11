import React, { useState } from 'react';
import '../css/Renuk.css';
import HoverableDropdown from './rff1.jsx';

const data = [
    { id: 'AP123XXXX', date: '2024-06-26', description: 'ssc GD(Application)', amount: '₹ 100.00', status: 'Success', state: 'Andhra Pradesh' },
    { id: 'AP123XXXX', date: '2024-05-15', description: 'ssc GD(Admit Card)', amount: '₹ 110.00', status: 'Failed', state: 'Telangana' },
    { id: 'AP123XXXX', date: '2024-04-20', description: 'ssc GD(Application)', amount: '₹ 100.00', status: 'Success', state: 'Karnataka' },
    { id: 'AP123XXXX', date: '2023-12-10', description: 'ssc GD(Admit Card)', amount: '₹ 110.00', status: 'Success', state: 'Tamil Nadu' },
    { id: 'AP123XXXX', date: '2023-11-15', description: 'ssc GD(Application)', amount: '₹ 100.00', status: 'Success', state: 'Kerala' },
    { id: 'AP123XXXX', date: '2023-10-05', description: 'ssc GD(Admit Card)', amount: '₹ 110.00', status: 'Failed', state: 'Andhra Pradesh' },
    { id: 'AP123XXXX', date: '2023-09-20', description: 'ssc GD(Admit Card)', amount: '₹ 110.00', status: 'Failed', state: 'Telangana' },
    { id: 'AP123XXXX', date: '2024-06-26', description: 'ssc GD(Application)', amount: '₹ 100.00', status: 'Success', state: 'Andhra Pradesh' },
    { id: 'AP123XXXX', date: '2024-05-15', description: 'ssc GD(Admit Card)', amount: '₹ 110.00', status: 'Failed', state: 'Karnataka' },
    { id: 'AP123XXXX', date: '2024-04-20', description: 'ssc GD(Application)', amount: '₹ 100.00', status: 'Success', state: 'Tamil Nadu' },
    { id: 'AP123XXXX', date: '2023-12-10', description: 'ssc GD(Admit Card)', amount: '₹ 110.00', status: 'Success', state: 'Kerala' },
    { id: 'AP123XXXX', date: '2023-11-15', description: 'ssc GD(Application)', amount: '₹ 100.00', status: 'Success', state: 'Andhra Pradesh' },
    { id: 'AP123XXXX', date: '2023-10-05', description: 'ssc GD(Admit Card)', amount: '₹ 110.00', status: 'Failed', state: 'Telangana' },
    { id: 'AP123XXXX', date: '2023-09-20', description: 'ssc GD(Admit Card)', amount: '₹ 110.00', status: 'Failed', state: 'Karnataka' },
];

const BillingHistory = () => {
    const [stateFilter, setStateFilter] = useState('');
    const [durationFilter, setDurationFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');

    const filterData = (data) => {
        const today = new Date();
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(today.getMonth() - 6);
        const twelveMonthsAgo = new Date();
        twelveMonthsAgo.setMonth(today.getMonth() - 12);

        return data.filter(item => {
            const itemDate = new Date(item.date);
            let dateMatch = true;

            if (durationFilter === '0-6 months') {
                dateMatch = itemDate >= sixMonthsAgo;
            } else if (durationFilter === '6-12 months') {
                dateMatch = itemDate < sixMonthsAgo && itemDate >= twelveMonthsAgo;
            }

            const stateMatch = stateFilter ? item.state === stateFilter : true;
            const statusMatch = statusFilter ? item.status === statusFilter : true;

            return dateMatch && stateMatch && statusMatch;
        });
    };

    return (
        <div className="billing-history">
            <h1>User Payments</h1>
            <h3>Billing History</h3>
            <HoverableDropdown 
                stateFilter={stateFilter}
                setStateFilter={setStateFilter}
                durationFilter={durationFilter}
                setDurationFilter={setDurationFilter}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
            />
            <div className="Rtable-container">
                <table className='Rtple'>
                    <thead className='Rthed'>
                        <tr className='rtr'>
                            <th>SPN ID</th>
                            <th>DATE</th>
                            <th>DESCRIPTION</th>
                            <th>AMOUNT</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody className='mnk'>
                        {filterData(data).map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                                <td>{item.description}</td>
                                <td>{item.amount}</td>
                                <td>{item.status === 'Success' ? '✔' : '✖'} {item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BillingHistory;
