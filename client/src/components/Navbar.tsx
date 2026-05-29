"use client";
import {
  ArrowUpRightIcon,
  BikeIcon,
  ChevronDownIcon,
  LogOutIcon,
  MapPinIcon,
  MenuIcon,
  PackageIcon,
  SearchIcon,
  ShieldIcon,
  ShoppingCartIcon,
  UserIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const user = { name: "John Deo", email: "john@exmplete", isAdmin: true };

  const { cartCount, setIsCartOpen } = {
    cartCount: 6,
    setIsCartOpen: (_data: any) => {
      "";
    },
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(true);
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
              <button
                className=" relative p-2 rounded-xl"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCartIcon className=" size-5 text-zinc-900" />
                {cartCount > 0 && (
                  <span className=" absolute -top-1 -right-1 size-4 bg-orange-400 text-white text-[10px] rounded-full flex-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* user */}
              <div className=" relative">
                {user ? (
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className=" flex items-center gap-2 p-2"
                  >
                    <div className=" size-8 rounded-full bg-green-950 text-white flex-center">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <ChevronDownIcon className=" size-3 text-zinc-500" />
                  </button>
                ) : (
                  <div className=" flex justify-center items-center gap-2">
                    <Link
                      href={"/login"}
                      className=" hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-950 rounded-full hover:bg-green-950-light transition-colors"
                    >
                      <UserIcon size={16} />
                      sign In
                    </Link>
                    {userMenuOpen ? (
                      <XIcon
                        className=" md:hidden"
                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                      />
                    ) : (
                      <MenuIcon
                        className="md:hidden"
                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                      />
                    )}

                    {userMenuOpen && (
                      <>
                        <div
                          className=" fixed inset-0 z-40 "
                          onClick={() => setUserMenuOpen(false)}
                        />
                        <div>
                          {user && (
                            <div className=" px-4 border-b border-b-orange-400">
                              <p className=" text-sm font-medium text-zinc-900">
                                {user?.name as string}
                              </p>
                              <p className=" text-xs text-zinc-500">
                                {user.email}
                              </p>
                            </div>
                          )}
                          <div onClick={() => setUserMenuOpen(false)}>
                            {!user && (
                              <Link href={"/login"} className="dropdown-link">
                                <UserIcon size={16} /> SignIn
                              </Link>
                            )}

                            {user && (
                              <Link
                                href={"/orders"}
                                className=" drop-down-link"
                              >
                                <PackageIcon size={16} /> My Orders
                              </Link>
                            )}

                            {user && (
                              <Link
                                href={"/address"}
                                className=" drop-down-link"
                              >
                                <MapPinIcon size={16} /> Address
                              </Link>
                            )}
                            <Link
                              href={"/products"}
                              className=" drop-down-link md:hidden"
                            >
                              <ArrowUpRightIcon size={16} /> Products
                            </Link>
                            <Link
                              href={"/deals"}
                              className=" drop-down-link md:hidden"
                            >
                              <ArrowUpRightIcon size={16} /> Deals
                            </Link>
                            {user?.isAdmin && (
                              <Link
                                href={"/admin/products"}
                                className=" drop-down-link"
                              >
                                <ShieldIcon size={16} />{" "}
                                <span className=" text-orange-800">
                                  Admin Pannel
                                </span>
                              </Link>
                            )}
                            {user && (
                              <div className=" border-t pt-1">
                                <button>
                                  <LogOutIcon
                                    size={16}
                                    className=" flex items-center gap-3 ps-4 py-2.5 text-sm w-full"
                                  />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
