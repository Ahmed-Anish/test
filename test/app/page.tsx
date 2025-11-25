"use client";

import Header from "./header";
import NonEV from "./nonEV";
import Rideshare from "./rideshare";
import ElectricCars from "./electricCars";
import { useState, useEffect } from "react";
import Image from "next/image"

export default function Home() {
  const [theme, setTheme] = useState<boolean>(false);
  useEffect(() => {
    document.body.classList.toggle("dark", theme);
  }, [theme]);

  return (
    <main className="flex flex-col space-y-8 p-1 h-screen">
      <Header theme={theme} setTheme={setTheme} />

      <Image className="mx-auto"
        src="/pictures/ecar.png"
        alt="Logo"
        width={400}
        height={400}
      />
      <div className="flex items-center space-x-2">
        <ElectricCars />
        <NonEV />
      </div>
      <Rideshare />
    </main>
  );
}
