import React from 'react';

function RevenueUpsideSummary({ data }) {
    const totalRevenue = data.projections.reduce((sum, proj) => sum + proj.revenue, 0);
    const avgGrowth = data.growthRate;

    return (
        <div>
            <h3>Summary</h3>
            <p>Total Revenue Over 5 Years: ${totalRevenue.toFixed(2)}</p>
            <p>Average Annual Growth: {avgGrowth}%</p>
        </div>
    );
}

export default RevenueUpsideSummary;