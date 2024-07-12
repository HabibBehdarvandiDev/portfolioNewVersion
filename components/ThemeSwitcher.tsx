"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CgDarkMode } from "react-icons/cg";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <Button
      variant="light"
      isIconOnly
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
    >
      <CgDarkMode className="w-5 h-5 text-foreground" />
    </Button>
  );
};

export default ThemeSwitcher;
