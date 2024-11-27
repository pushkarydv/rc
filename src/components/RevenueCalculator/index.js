'use client';

import React, { useState } from 'react';
import UserInputForm from './UserInpurForm';
import ProjectedRevenueOutput from './ProjectedRevenueOutput';
import RevenueUpsideSummary from './RevenueUpsideSummary';
function RevenueCalculator() {
    const [revenueData, setRevenueData] = useState({
        currentRevenue: 0,
        growthRate: 0,
        projections: []
    });

    const handleCalculate = (current, rate) => {
        let projections = [];
        let lastYearRevenue = current;
        for (let i = 1; i <= 5; i++) {
            let projected = lastYearRevenue * (1 + rate / 100);
            projections.push({ year: i, revenue: projected });
            lastYearRevenue = projected;
        }
        setRevenueData({
            currentRevenue: current,
            growthRate: rate,
            projections: projections
        });
    };

    return (
        <div>
            <UserInputForm onCalculate={handleCalculate} />
            <ProjectedRevenueOutput projections={revenueData.projections} />
            <RevenueUpsideSummary data={revenueData} />
        </div>
    );
}

export default RevenueCalculator;