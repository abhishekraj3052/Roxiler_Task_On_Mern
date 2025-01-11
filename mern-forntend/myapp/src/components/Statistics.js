import React, { useState, useEffect } from 'react';
import { getStatistics } from '../api';

const Statistics = ({ month }) => {
    const [stats, setStats] = useState({});

    useEffect(() => {
        const fetchStats = async () => {
            const { data } = await getStatistics(month);
            setStats(data);
        };
        fetchStats();
    }, [month]);

    return (
        <div>
            <h3>Statistics</h3>
            <p>Total Sale Amount: {stats.totalSaleAmount}</p>
            <p>Total Sold Items: {stats.soldItems}</p>
            <p>Total Not Sold Items: {stats.notSoldItems}</p>
        </div>
    );
};

export default Statistics;
