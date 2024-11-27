import React, { useState } from 'react';

function UserInputForm({ onCalculate }) {
    const [currentRevenue, setCurrentRevenue] = useState('');
    const [growthRate, setGrowthRate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentRevenue > 0 && growthRate >= 0 && growthRate <= 100) {
            onCalculate(parseFloat(currentRevenue), parseFloat(growthRate));
        } else {
            alert('Please enter valid numbers for revenue and growth rate.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="number" 
                value={currentRevenue} 
                onChange={(e) => setCurrentRevenue(e.target.value)} 
                placeholder="Current Revenue" 
                required 
                min="0"
                step="0.01"
            />
            <input 
                type="number" 
                value={growthRate} 
                onChange={(e) => setGrowthRate(e.target.value)} 
                placeholder="Annual Growth Rate (%)" 
                required 
                min="0" 
                max="100"
                step="0.01"
            />
            <input 
                type="range" 
                min="0" 
                max="100" 
                value={growthRate} 
                onChange={(e) => setGrowthRate(e.target.value)} 
            />
            <span>{growthRate}%</span>
            <button type="submit">Calculate</button>
        </form>
    );
}

export default UserInputForm;