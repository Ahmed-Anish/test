export default function Header() {
  return <>
    <nav className="flex space-x-2 bg-zinc-100 rounded-full p-4 text-lg mx-auto *:bg-zinc-300 text-black *:rounded-xl *:p-2 *:cursor-pointer">
        <a href="#NonEV">Non Electric Vehicles </a>
        <a href="#RideShare">Ride sharing </a>
        <a href="#EV">Electrical vehicles </a>
    </nav>
  </>;
}
