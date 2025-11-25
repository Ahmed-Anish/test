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
        <section id="EV" className="w-[100%] max-w-xl mt-15 mx-auto mt-50">
            <h2 className="h-44 w-full bg-white/10 rounded-xl p-3 text-center text-2xl font-mono font-bold">
                Societal Benefits of Electric Cars
            </h2>
            <p className="text-sm text-center mt-5">
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
            <p className="text-sm text-center mt-4 text-black font-mono">
                These scores represents the advantages through the use of electric cars! 
            </p>
        </section>
    );
}