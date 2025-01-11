import React, { useState } from 'react';
import TransactionsTable from './components/TransactionsTable';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

const App = () => {
    const [month, setMonth] = useState('03'); // Default to March

    return (
        <div>
            <h1>MERN Stack Application</h1>
            <select value={month} onChange={(e) => setMonth(e.target.value)}>
                {Array.from({ length: 12 }, (_, i) => {
                    const monthNum = (i + 1).toString().padStart(2, '0');
                    return (
                        <option key={monthNum} value={monthNum}>
                            {new Date(0, i).toLocaleString('en', { month: 'long' })}
                        </option>
                    );
                })}
            </select>
            <TransactionsTable month={month} />
            <Statistics month={month} />
            <BarChart month={month} />
            <PieChart month={month} />
        </div>
    );
};

export default App;
