"use client";
import 
{
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts"

const data = 
[
    {name: "LCE", impact: 95},
    {name: "EE", impact: 90},
    {name: "Less Noise", impact: 95},
    {name: "Air Quality", impact: 85},
    {name: "Fuel Savings", impact: 80}
];

export default function ElectricCars()
{
    return(
        <section id="EV" className="w-full max-w-3xl mt-20 text-center font-mono">
            <h2 className="text-2xl font-bold mb-10 font-mono">
                Societal Benefits of Electric Cars
            </h2>
            <p className="text-sm text-center mt-">
                    Impacts such as Lower Carbon Emissions, Energy Efficiency, Less Noise, Air Quality, & Fuel Savings 
                    are taken into consideration
                </p>
            <div className="h-72 w-full bg-white/5 rounded-xl p-5"> {/* Our bar graph that shows the data */}
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="1 3"/>
                            <XAxis dataKey="name"/>
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="impact" fill="#193cb8"/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            
        </section>
    );
}