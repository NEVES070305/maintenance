"use client";
import Image from "next/image";
import { FaBuilding, FaTools, FaUsers } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { IoMdCheckbox, IoMdCheckboxOutline } from "react-icons/io";
import { MdDashboard, MdForklift } from "react-icons/md";
import { Footer } from "./componets/footer";
import { Aside } from "./componets/aside";
import { Card } from "./componets/card";
import Table from "./componets/table";
import MachineRegistrationForm from "./pages/machine/machineRegistrationForm";
import { useState } from "react";
import MaintenanceStatusManager from "./pages/maintenance/maintenanceStatusManager";
import AssignTeam from "./pages/maintenance/assignTeam";
import RegisterMaterials from "./pages/maintenance/registerMaintenance";
import RegisterPartsMovement from "./pages/inventory/registerPartsMovement";
import RegisterSpareParts from "./pages/inventory/registerSpare";
import ManageCollaboratorAvailability from "./pages/manageCollaboratorAvailability";
import RegisterMaintenanceTeam from "./pages/team/registerMaintenanceTeam";
import Maintenance from "./pages/maintenance/maintenance";
import Machine from "./pages/machine/machine";
import Team from "./pages/team/team";

export default function Home() {
  const [component, setComponent] = useState<string>("machine");
  const cards = [
    {color: "bg-orange-200 ", quantity: "100", text: "Ambientes", icon: <FaBuilding size={48}/>},
    {color: "bg-blue-200", quantity: "100", text: "Equipamentos", icon: <MdForklift size={48}/>},
    {color: "bg-red-200", quantity: "200", text: "O.S Abertas", icon: <GrNotes size={48}/>},
    {color: "bg-green-200", quantity: "100", text: "O.S. Concluídas", icon: <IoMdCheckboxOutline size={48}/>},
  ]
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <Aside onLinkClick={setComponent}/>

        <main className="flex-1 flex flex-col">
          {component == "dashboard" && <>
          <h1 className="text-4xl font-bold uppercase w-full
           bg-white/40 p-6 text-center">
            Sistema de Gestão de Manutenção</h1>

          <div>
            <div className="grid grid-cols-4 gap-4 p-6">
            {cards.map((card, index)=>(
              <Card key={index} color={card.color}
                    text={card.text}
                    quantity={card.quantity}
                    icon={card.icon}/>
            ))
            }
            </div>
          </div>
          <Table/>
          </>
          } 
          {component == "maintenance" &&
            <Maintenance/>
          }
          {component =="equipments" &&
          <Machine/>
          }
          {component == "user" &&
          <Team/>
          }
        </main>
      </div>
      <Footer/>
    </div>
  );
}
