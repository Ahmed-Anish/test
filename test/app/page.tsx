"use client";

import Header from "./header";
import NonEV from "./nonEV";
import Rideshare from "./rideshare";
import ElectricCars from "./electricCars";
import { useState, useEffect } from "react";

export default function Home() {
  const [theme, setTheme] = useState<boolean>(false);
  useEffect(() => {
    document.body.classList.toggle("dark", theme);
  }, [theme]);

  return (
    <main className="flex flex-col space-y-8 p-1 h-screen">
      <Header theme={theme} setTheme={setTheme} />
      <div className="flex space-x-2">
        <ElectricCars />
        <NonEV />
      </div>
      <Rideshare />
    </main>
  );
}
