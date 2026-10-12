import { SquareMenu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav>
      <div className="flex container mx-auto items-center justify-between bg-blue-800 text-white p-4">
        <div>
          <p className="font-bold">CS - Ticket System</p>
        </div>
        <div className=" items-center hidden md:flex gap-3">
          <ul className="flex items-center gap-3">
            <li>Home</li>
            <li>FAQ</li>
            <li>CHANGE LOG</li>
            <li>blog</li>
          </ul>
          <button className="p-2 cursor-pointer font-bold bg-linear-to-r from-violet-300 to-violet-700 border rounded">
            + New Ticket
          </button>
        </div>
        <button
          className="cursor-pointer md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <SquareMenu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t border-blue-800 p-4">
          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">FAQ</li>
            <li className="cursor-pointer">Changelog</li>
            <li className="cursor-pointer">Blog</li>
          </ul>

          <button className="mt-4 w-full rounded-lg bg-linear-to-r from-violet-500 to-violet-800 p-2 font-bold">
            + New Ticket
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
