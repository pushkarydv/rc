'use client'

import React from 'react'

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

export default function RevenueChart({ data }) {
    return (
        <ChartContainer
            config={{
                revenue: {
                    label: "Revenue",
                    color: "hsl(var(--chart-1))",
                },
            }}
            className="h-[300px] mt-4"
        >
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="revenue" fill="var(--color-revenue)" />
                </BarChart>
            </ResponsiveContainer>
        </ChartContainer>
    )
}

