  
import navbarStyled from "./Navbar.module.css";
import {
  IconHome,
  IconPlugConnected,
  IconSettingsCog,
  IconUsers,
} from "@tabler/icons-react";
import { FloatingDock } from "@/components/shadcn/ui/floating-dock";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "About",
      icon: (
        <IconUsers stroke={2} className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Service",
      icon: (
        <IconSettingsCog stroke={2} className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Connect",
      icon: (
        <IconPlugConnected stroke={2} className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    }
  ];

 
  return (
    <nav className="fixed top-0 w-full z-20">
      <Link href={"/"}>
        <Image className="fixed top-5 left-5 w-[3rem] md:w-[5rem]" src={"/misani-logo.png"} alt="misani logo" width={80} height={80} />
      </Link>
      <div className="fixed md:static bottom-5 right-5 md:flex md:items-center md:justify-center md:h-[6rem] md:w-full">
        <FloatingDock
          items={links}
        />
      </div>
    </nav>
  );
}
