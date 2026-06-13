"use client";

import { logout } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/Hooks/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiCross, BiMenu } from "react-icons/bi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // user varify function

  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  console.log("userrrrrrrrrr", user);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Tours", href: "/tours" },
    { label: "Airport Transfer", href: "#" },
    { label: "Build Your Adventure", href: "#" },
    { label: "About", href: "#" },
    { label: "Reviews", href: "#" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? "bg-white backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className={`font-bold text-xl tracking-wide transition-colors ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            BrooksTours
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  isScrolled
                    ? "text-black hover:text-accent"
                    : "text-white hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button className="bg-gradient-to-r from-[#2ECC71] to-[#F5C542] text-black font-semibold px-5 py-2 rounded-full hover:scale-105 transition">
                Book a Tour
              </button>

              <Link
                href="/login"
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-black hover:text-accent"
                    : "text-white hover:text-accent"
                }`}
              >
                Login
              </Link>

              <button
                className={`px-5 py-2 rounded-full border transition-all duration-200 ${
                  isScrolled
                    ? "border-black text-black hover:bg-black hover:text-white"
                    : "border-white text-white hover:bg-white hover:text-black"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition ${
                isScrolled
                  ? "text-black hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isMenuOpen ? (
                <BiCross className="w-6 h-6" />
              ) : (
                <BiMenu className="w-6 h-6" />
              )}
            </button>
          </div>

          {user ? (
            <>
              <Link
                href="/dashboard"
                className={`text-sm font-medium ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className={`px-5 py-2 rounded-full border ${
                  isScrolled
                    ? "border-black text-black"
                    : "border-white text-white"
                }`}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className={`text-sm font-medium ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Login
              </Link>

              <Link
                href="/signup"
                className={`px-5 py-2 rounded-full border ${
                  isScrolled
                    ? "border-black text-black"
                    : "border-white text-white"
                }`}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white shadow-lg border-t border-gray-200 px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-black font-medium py-2 hover:text-accent transition"
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-4 space-y-3">
            <button className="w-full bg-gradient-to-r from-[#2ECC71] to-[#F5C542] text-black font-semibold py-3 rounded-full">
              Book a Tour
            </button>

            <button className="w-full border border-black text-black py-3 rounded-full hover:bg-black hover:text-white transition">
              Login / Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
