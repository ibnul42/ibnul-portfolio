"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import clsx from "clsx";

import { useTheme } from "@/providers/theme-provider";
import { MAIN_MENU, HOME_MENU } from "@/config/navigation";
import Image from "next/image";

export const Navbar = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const isHome = pathname === "/";
  const menuItems = isHome ? HOME_MENU : MAIN_MENU;

  return (
    <nav
      className={clsx("z-10", {
        "backdrop-blur border-b border-neutral-200 dark:border-neutral-800":
          !isHome,
      })}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold">
          <Image src="/assets/logo.png" width={35} height={35} alt="logo" />
        </Link>

        <div className="flex items-center gap-6">
          {/* Menu items (hidden on home if you want only separate menu later) */}
          {!isHome && (
            <ul className="hidden md:flex items-center gap-6 text-sm">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white text-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* Theme toggle (always visible) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={clsx(
              "relative rounded-full p-2 flex items-center justify-center cursor-pointer",
              "transition-all duration-200",
              // glass effect
              "bg-white/60 hover:bg-white dark:bg-neutral-900/60 dark:hover:bg-white/20",
              "backdrop-blur-md",
              // border for contrast
              "border border-neutral-500/50 dark:border-neutral-300/50",
            )}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-white dark:text-neutral-100" />
            ) : (
              <Moon className="h-5 w-5 text-black/50 dark:text-neutral-100" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
