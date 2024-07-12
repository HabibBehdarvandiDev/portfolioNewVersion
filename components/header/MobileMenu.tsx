"use client";

import { NavigationLinks } from "@/routes";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { IoClose } from "react-icons/io5";

type Props = {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileMenu = ({ menuOpen, setMenuOpen }: Props) => {
  const pathname = usePathname();
  return (
    <section
      className={`w-full h-screen absolute sm:hidden top-0 bg-foreground bg-opacity-25 backdrop-blur-sm transition-transform duration-300 ease-in-out shadow-md ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="bg-background w-9/12 h-full p-4 flex flex-col justify-start items-start align-middle overflow-auto">
        <Button isIconOnly variant="light" onClick={() => setMenuOpen(false)}>
          <IoClose className="w-5 h-5 text-foreground" />
        </Button>
        <div className="flex flex-col space-y-6 mt-5 px-2">
          {NavigationLinks.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                pathname.includes(link.path)
                  ? "text-primary-600"
                  : "text-foreground"
              } text-base font-semibold`}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </nav>
    </section>
  );
};

export default MobileMenu;
