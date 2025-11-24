import Image from "next/image";
import Header from "./header";
import NonEV from "./nonEV";
import Rideshare from "./rideshare";
import ElectricCars from "./electricCars";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16  sm:items-start">
        <Header />
        <h1>Ford</h1>
        <h2>(Future Mobility Home)</h2>
        <ElectricCars />
        <Rideshare />
        <NonEV />
      </main>
    </div>
  );
}
