import { FaBuilding, FaTools, FaUsers } from "react-icons/fa";
import { MdDashboard, MdForklift } from "react-icons/md";

const links = [
  { target: "#", text: "Dashboard", icon: <MdDashboard />, component: "dashboard" },
  { target: "#", text: "Ambientes", icon: <FaBuilding />, component: "building" },
  { target: "#", text: "Equipamentos", icon: <MdForklift />, component: "equipments" },
  { target: "#", text: "Manutenções", icon: <FaTools />, component: "maintenance" },
  { target: "#", text: "Usuário", icon: <FaUsers />, component: "user" },
];
interface NavLinkProps {
  onLinkClick: (component: string) => void;
}

export function NavLink({ onLinkClick }: NavLinkProps){
  return(
    <nav className="space-y-4 flex flex-col mt-8">
    {links.map((link, index)=>(<a href={link.target} key={index}
                               onClick={() => onLinkClick(link.component)}
                               className="flex items-center gap-4
                                 hover:font-semibold">
                                  {link.icon}
                                  {link.text}
                                 </a>
                          ))}
    </nav>
  )
}