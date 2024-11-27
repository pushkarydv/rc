'use client'

import React, { useState } from 'react'

import UserInputForm from './UserInputForm'
import RevenueChart from './RevenueChart'
import RevenueUpsideSummary from './RevenueUpsideSummary'
import ProjectedRevenueOutput from './ProjectedRevenueOutput'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function RevenueCalculator() {
    const [revenueData, setRevenueData] = useState({
        currentRevenue: 0,
        growthRate: 0,
        projections: []
    })

    const handleCalculate = (current, rate) => {
        let projections = []
        let lastYearRevenue = current
        for (let i = 1; i <= 5; i++) {
            let projected = lastYearRevenue * (1 + rate / 100)
            projections.push({ year: i, revenue: projected })
            lastYearRevenue = projected
        }
        setRevenueData({
            currentRevenue: current,
            growthRate: rate,
            projections: projections
        })
    }

    const handleDownloadCSV = () => {
        const csvContent = "data:text/csv;charset=utf-8,"
            + "Year,Revenue\n"
            + revenueData.projections.map(proj => `${proj.year},${proj.revenue.toFixed(2)}`).join("\n")

        const encodedUri = encodeURI(csvContent)
        const link = document.createElement("a")
        link.setAttribute("href", encodedUri)
        link.setAttribute("download", "revenue_projections.csv")
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <div className="container mx-auto p-4">
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Revenue Calculator</CardTitle>
                    <CardDescription>Calculate and visualize your projected revenue</CardDescription>
                </CardHeader>
                <CardContent>
                    <UserInputForm onCalculate={handleCalculate} />
                </CardContent>
            </Card>

            {revenueData.projections.length > 0 && (
                <>
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle>Projected Revenue</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ProjectedRevenueOutput projections={revenueData.projections} />
                            <RevenueUpsideSummary data={revenueData} />
                            <RevenueChart data={revenueData.projections} />
                            <Button onClick={handleDownloadCSV} className="mt-4">Download CSV</Button>
                        </CardContent>
                    </Card>
                </>
            )}
        </div>
    )
}

