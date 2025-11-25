import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
const data = [
  { name: "Range", value: 90 },
  { name: "Charging Speed", value: 75 },
  { name: "Autonomy", value: 85 },
  { name: "Safety", value: 80 },
  { name: "Price", value: 70 },
];
const COLORS = ["#1447e6","#1447e6", "#14B8A6", "#1c398e", "#162456"];
export default function Rideshare() {
  return (
    <>
      <section id="RideShare" className="w-full h-full max-w-xl mt-15 mx-auto">
        <div>
          <h2 className="w-full rounded-xl p-3 text-center text-2xl font-mono">
            Ride Share
          </h2>
          <p className="text-sm text-center mt-5">
            Cons of ride sharing for Bus.
          </p>
        </div>
        <div className="mx-auto w-full" style={{ width: 500, height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={4}
                label={({ name, percent }) =>
                  `${name} ${percent*100}%`
                }>
                {data.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>
    </>
  );
}
