import { NavigationAvatar } from "../NavigationAvatar";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Your Brand</div>
        <NavigationAvatar positionY="top-12" />
      </div>
    </nav>
  );
}
