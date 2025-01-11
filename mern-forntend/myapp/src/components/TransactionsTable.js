import React, { useState, useEffect } from 'react';
import { getTransactions } from '../api';

const TransactionsTable = ({ month }) => {
    const [transactions, setTransactions] = useState([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchTransactions = async () => {
        const { data } = await getTransactions({ month, search, page, perPage: 10 });
        setTransactions(data.transactions);
        setTotalPages(Math.ceil(data.count / 10));
    };

    useEffect(() => {
        fetchTransactions();
    }, [month, search, page]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search transactions"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Sold</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((t) => (
                        <tr key={t._id}>
                            <td>{t.title}</td>
                            <td>{t.description}</td>
                            <td>{t.price}</td>
                            <td>{t.dateOfSale}</td>
                            <td>{t.sold ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                Previous
            </button>
            <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
                Next
            </button>
        </div>
    );
};

export default TransactionsTable;
