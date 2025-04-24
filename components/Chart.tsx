'use client'

import { useTheme } from '@/context/ThemeContext'
import React from 'react'

interface ChartDataItem {
    label: string
    value: number
    color: string
}

const chartData: ChartDataItem[] = [
    { label: 'Students', value: 200, color: '#57A9FB' },
    { label: 'Mentors', value: 8, color: '#A6E6D9' },
    { label: 'Programs', value: 22, color: '#F8A9AE' },
    { label: 'Others', value: 10, color: '#FDBE5A' },
]

const DonutChart: React.FC = () => {
    const total = chartData.reduce((sum, item) => sum + item.value, 0)
    let cumulativePercent = 0

    const getCircleSegment = (percent: number, color: string) => {
        const radius = 52
        const circumference = 2 * Math.PI * radius
        const strokeLength = circumference * percent
        const offset = circumference * cumulativePercent
        cumulativePercent += percent

        return (
            <circle
                key={color + percent}
                r={radius}
                cx="60"
                cy="60"
                fill="transparent"
                stroke={color}
                strokeWidth="16"
                strokeDasharray={`${strokeLength} ${circumference - strokeLength}`}
                strokeDashoffset={-offset}
            />
        )
    }

    const { isDark } = useTheme()
    return (
        <div className="relative flex items-center justify-center gap-6 p-6 bg-[var(--color-backgroundProgram)] rounded-xl w-full h-96">
            <div className="relative">
                <svg width="120" height="120" className="-rotate-90">
                    {chartData.map((data) =>
                        getCircleSegment(data.value / total, data.color)
                    )}
                    <circle r="40" cx="60" cy="60" fill="#F8F6FD" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-xl font-bold text-black">{total}</p>
                    <p className="text-xs text-gray-500">Users</p>
                </div>
            </div>

            <div className="flex flex-col gap-2 text-sm">
                {chartData.map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                        <span
                            className="inline-block w-3 h-3 rounded-full"
                            style={{ backgroundColor: item.color }}
                        ></span>
                        <span className={`${isDark ? "text-white" : "text-black"}`}>{item.label}</span>
                        <span className="ml-auto font-bold text-gray-900">
                            {item.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DonutChart
