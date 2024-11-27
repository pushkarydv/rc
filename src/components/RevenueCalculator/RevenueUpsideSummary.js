import React from 'react'

export default function RevenueUpsideSummary({ data }) {
    const totalRevenue = data.projections.reduce((sum, proj) => sum + proj.revenue, 0)
    const avgGrowth = data.growthRate

    return (
        <div className="mt-4">
            <h3 className="text-lg font-semibold">Summary</h3>
            <p>Total Revenue Over 5 Years: ${totalRevenue.toFixed(2)}</p>
            <p>Average Annual Growth: {avgGrowth.toFixed(2)}%</p>
        </div>
    )
}

