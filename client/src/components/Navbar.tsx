"use client";
import { BikeIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const user = { name: "John Deo", email: "john@exmplete", isAdmin: true };

  const { cartCount, setIsCartOpen } = {
    cartCount: 6,
    setIsCartOpen: (_data: null) => {
      "";
    },
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div>
      <nav className=" bg-white sticky top-0 z-50 border-b border-green-600">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 h-16">
          {/* logo */}
          <Link
            href={"/"}
            className=" flex items-center gap-2 text-2xl font-medium shrink-0"
          >
            <BikeIcon size={24} /> Daily Bazar
          </Link>

          <div className=" w-full flex items-center justify-end gap-4 lg:gap-10">
            {/* nav links -desktop*/}
            <div className=" hidden md:flex items-center gap-6 text-sm text-zinc-600">
              <Link href={"/"}>Home</Link>
              <Link href={"/products"}>Products</Link>
              <Link href={"/deals"} className=" text-orange-300">
                Deals
              </Link>
            </div>
            {/* seacrh  */}

            <form className=" hidden sm:flex flex-1 max-w-sm text-xs sm:text-sm">
              <div className=" relative w-full">
                <SearchIcon className=" absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Serach for Groceries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 p-2 bg-orange-50 rounded-full ring ring-orange-300 focus:ring-orange-400/30"
                />
              </div>
            </form>

            {/* rightAction */}
            <div className=" flex items-center gap-3">
                {/* cart */}

                {/* user */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
