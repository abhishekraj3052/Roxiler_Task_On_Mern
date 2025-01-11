import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { getPieChart } from '../api';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);


const PieChart = ({ month }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getPieChart(month);
            setData(data);
        };
        fetchData();
    }, [month]);

    const chartData = {
        labels: data.map((d) => d.category),
        datasets: [
            {
                data: data.map((d) => d.count),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            },
        ],
    };

    return <Pie data={chartData} />;
};

export default PieChart;
