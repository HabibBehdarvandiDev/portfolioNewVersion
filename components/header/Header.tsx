"use client";

import { Button } from "@nextui-org/react";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <header className="shadow-md shadow-zinc-100 p-4 flex justify-between align-middle items-center">
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

        

      </header>

      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Header;
