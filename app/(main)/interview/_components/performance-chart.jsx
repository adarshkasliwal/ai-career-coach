"use client"

import { format } from 'date-fns/format';
import React, { useEffect } from 'react'
import { useState } from 'react';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const PerformanceChart = ({ assessments }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (assessments) {
      const formattedData = assessments.map((assessment) => ({
        date: format(new Date(assessment.createdAt), "MMM dd"),
        score: assessment.quizScore,
      }))
      setChartData(formattedData)
    }
  }, [assessments])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="gradient-title text-3xl md:text-4xl">Performance Trend</CardTitle>
        <CardDescription>Your Quiz score over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='h-[300px]'>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[0,100]} />
              <Tooltip content={(active,payload)=>{
                if(active && payload?.length){
                  return(
                    <div className='bg-background border rounded-lg p-2 shadow-md'>
                      <p className='text-sm font-meedium'>
                        Score: {payload[0].value}%
                      </p>
                      <p className='text-xs text-muted-foreground'>
                        {payload[0].payload.date}
                      </p>
                    </div>
                  )
                }
              }}/>
              <Line type="monotone" dataKey="score" stroke="#8884d8" strokeWidth={2} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>

    </Card>
  )
}

export default PerformanceChart