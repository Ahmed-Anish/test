"use client";

import
{
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts"

const data = 
[
    {name: "Air Pollutions", value: 30},
    {name: "Fossil Fuel Dependence", value: 25},
    {name: "Higher Maintenance", value: 21},
    {name: "Noise Pollution", value: 23},
    {name: "Health Issues", value: 29},
];

const COLORS = ["#1447e6","#1447e6", "#14B8A6", "#1c398e", "#162456"];

export default function NonEV()
{
    return(
        <section id="NonEV" className="w-full max-w-3xl mt-20 text-center font-mono">
            <h2 className="text-2xl font-bold mb-10 font-mono">
                Socieal Downside of Non-Electric Vehicles 
            </h2>
            <p className="mb-6">
                Higher shares represent greater cons on society
            </p>

            <div className="h-72 w-full bg-white/5 rounded-xl p-4">
                <ResponsiveContainer width="100%" height="100%">
                    <br></br>
                    <PieChart>
                        <Pie 
                            data = {data}
                            dataKey = "value"
                            nameKey= "name"
                            cx = "50%"
                            cy = "50%"
                            outerRadius={80}
                            label
                        >
                            {data.map((entry, index) => (
                                <Cell key={entry.name} fill={COLORS[index % COLORS.length]}/>
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
}