import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { getBarChart } from '../api';
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


const BarChart = ({ month }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getBarChart(month);
            setData(data);
        };
        fetchData();
    }, [month]);

    const chartData = {
        labels: data.map((d) => d.range),
        datasets: [
            {
                label: 'Items',
                data: data.map((d) => d.count),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    return <Bar data={chartData} />;
};

export default BarChart;
