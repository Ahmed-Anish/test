"use client";
import { Icon } from "@iconify/react";
export default function Header({
  theme,
  setTheme,
}: {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  console.log(theme);
  return (
    <>
      <div className="w-full grid grid-cols-3 p-1 justify-items-between content-center place-content-center">
        <div className="size-14 rounded-full justify-self-start">
            <img src="https://www.ford.com/etc/designs/brand_ford/brand/skin/ford/img/bri-icons/FordOval.svg" alt="" className=""/>
        </div>
        <h1 className="mx-auto text-2xl justify-self-center font-mono">Ford Future Mobility Home</h1>
        <button className="btn text-white *:text-xl p-4 *:md:size-6 text-center flex justify-self-end" onClick={() => setTheme((val)=>!val)}>
          <Icon
            icon={theme ? "ic:outline-dark-mode" : "ic:outline-light-mode"}
          />
        </button>
      </div>
      <nav className="flex space-x-2 bg-zinc-100 rounded-full p-4 text-lg mx-auto text-white!  *:rounded-full *:p-2">
        <a className="btn" href="#NonEV">Non Electric Vehicles </a>
        <a className="btn" href="#RideShare">Ride sharing </a>
        <a className="btn" href="#EV">Electrical vehicles </a>
      </nav>
    </>
  );
}
