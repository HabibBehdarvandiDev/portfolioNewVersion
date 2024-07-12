"use client";

import { Button } from "@nextui-org/react";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { NavigationLinks } from "@/routes";
import { usePathname } from "next/navigation";
import { CgDarkMode } from "react-icons/cg";
import ThemeSwitcher from "../ThemeSwitcher";
import CvDownload from "../CvDownload";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const pathname = usePathname();

  return (
    <>
      <header className="shadow-md p-4 flex justify-between align-middle items-center">
        <Button
          variant="light"
          isIconOnly
          onClick={() => setMenuOpen(true)}
          className="sm:hidden"
        >
          <FaBarsStaggered className="w-5 h-5 text-foreground" />
        </Button>

        <Link
          className="text-foreground text-2xl font-medium text-center"
          href={"/"}
        >
          Habib<span className="text-primary-600 font-bold">Dev</span>
        </Link>

        <nav className="hidden md:flex flex-1 mr-5 ">
          {NavigationLinks.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                pathname.includes(link.path)
                  ? "text-primary-600"
                  : "text-foreground"
              } mx-3 hover:text-primary-600 hover:-translate-y-0.5 duration-150 transition-all text-nowrap`}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center align-middle gap-4">
        <span className="hidden md:flex"><CvDownload /></span>
        <ThemeSwitcher />
        </div>
      </header>

      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Header;
