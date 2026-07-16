"use client";

import {
 LineChart,
 Line,
 XAxis,
 YAxis,
 Tooltip,
 ResponsiveContainer
} from "recharts";


export default function VisitorChart({
 data
}:{
 data:any[]
}){


return (

    <div className="
    bg-slate-900
        rounded-2xl
        p-6
        mt-8
        ">

    <h2 className="text-white text-xl font-bold mb-5">
    Visitors Trend
    </h2>


    <ResponsiveContainer width="100%" height={300}>

    <LineChart data={data}>

    <XAxis dataKey="date" />

    <YAxis />

    <Tooltip />

    <Line
    type="monotone"
    dataKey="visitors"
    />


    </LineChart>

    </ResponsiveContainer>


    </div>

)

};