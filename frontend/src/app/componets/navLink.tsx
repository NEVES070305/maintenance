import { FaBuilding, FaTools, FaUsers } from "react-icons/fa";
import { MdDashboard, MdForklift } from "react-icons/md";

const links = [
  {target: "#", text: "Dashboard", icon: <MdDashboard/>},
  {target: "#", text: "FaBuilding", icon: <FaBuilding/>},
  {target: "#", text: "Equipamentos", icon: <MdForklift/>},
  {target: "#", text: "Manutenções", icon: <FaTools/>},
  {target: "#", text: "Usuário", icon: <FaUsers/>},
]

export function NavLink(){
  return(
    <nav className="space-y-4 flex flex-col mt-8">
    {links.map((link, index)=>(<a href={link.target} key={index} className="flex items-center gap-4
                                 hover:font-semibold">
                                  {link.icon}
                                  {link.text}
                                 </a>
                          ))}
    </nav>
  )
}