import { exportTraceState } from "next/dist/trace";
import { useState } from "react";
import MachineRegistrationForm from "./machineRegistrationForm";
import MachineDetailPage from "./machineDetail";

function Machine(){
  const [screen, setScreen] = useState<string>("main");
  const cards = [
    { title: 'Cadastro de Máquinas', description: 'Cadastro de máquinas', route: 'register-machine'},
    { title: 'Visualização de Máquinas', description: 'Visualização de máquinas', route: 'visualization-machine'},
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard de Manutenção</h1>
      {screen != "main" && <><button
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={()=>setScreen("main")}
        >
          Voltar
        </button></>
        }
      {screen == "main" &&
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => setScreen(card.route)}
          >
            <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      }
      {screen == "register-machine" && <MachineRegistrationForm/>
      }
      {screen == "visualization-machine" && <MachineDetailPage/>}
     
    </div>
  );
}

export default Machine;