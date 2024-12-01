'use client'

import React, { useState } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'

export default function UserInputForm({ onCalculate }) {
    const [currentRevenue, setCurrentRevenue] = useState(0)
    const [growthRate, setGrowthRate] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (parseFloat(currentRevenue) > 0 && growthRate >= 0 && growthRate <= 100) {
            onCalculate(parseFloat(currentRevenue), growthRate)
        } else {
            alert('Please enter valid numbers for revenue and growth rate.')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <Label htmlFor="currentRevenue">Current Revenue ($)</Label>
                <Input
                    id="currentRevenue"
                    type="number"
                    value={currentRevenue}
                    onChange={(e) => setCurrentRevenue(e.target.value)}
                    placeholder="Enter current revenue"
                    required
                    min="0"
                    step="0.01"
                />
            </div>
            <div>
                <Label htmlFor="growthRate">Annual Growth Rate (%)</Label>
                <Slider
                    id="growthRate"
                    min={0}
                    max={100}
                    step={0.1}
                    value={[growthRate]}
                    onValueChange={(value) => setGrowthRate(value[0])}
                    className="my-3"
                />

                <Input
                    id="growthRateInput"
                    type="number"
                    value={growthRate}
                    onChange={(e) => {
                        const value = parseFloat(e.target.value)
                        if (value >= 0 && value <= 100) {
                            setGrowthRate(value)
                        }
                    }}
                    placeholder="Enter growth rate"

                    required
                    min="0"
                    max="100"
                    step="0.1"
                />
            </div>
            <Button type="submit">Calculate</Button>
        </form>
    )
}

