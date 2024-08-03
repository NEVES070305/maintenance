import { FaBuilding, FaTools, FaUsers } from "react-icons/fa";
import { MdDashboard, MdForklift } from "react-icons/md";
import Image from "next/image";
import { NavLink } from "./navLink";
interface AsideProps {
  onLinkClick: (component: string) => void;
}

export function Aside({ onLinkClick }: AsideProps) {
  return(
    <aside className="w-64 p-6 bg-white/40">
          <Image src={"/image/logo.png"} className="w-full"
           alt="Logo" width={240} height={240} />
          <NavLink onLinkClick={onLinkClick}/>
        </aside>
  )
}