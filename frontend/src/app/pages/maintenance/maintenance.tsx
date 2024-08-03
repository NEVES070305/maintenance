import React, { useState } from 'react';
import AssignTeam from './assignTeam';
import MaintenanceStatusManager from './maintenanceStatusManager';
import RegisterMaintenanceTeam from '../team/registerMaintenanceTeam';
import MaintenanceRequestForm from './maintenanceRequestForm';
import RegisterMaintenance from './registerMaintenance';


function Maintenance(){

  const [screen, setScreen] = useState<string>("main");
  const cards = [
    { title: 'Cadastro de Manutenções', description: 'Solicitar novas manutenções.', route: 'request-maintenance' },
    { title: 'Gerenciamento', description: 'Gerenciar status das manutenções.', route: 'manage-status' },
    { title: 'Atribuição de Equipes', description: 'Atribuir equipes às solicitações.', route: 'assign-teams' },
    { title: 'Registro de Peças', description: 'Registrar peças utilizadas na manutenção.', route: 'register-parts' },
    { title: 'Geração de Relatórios', description: 'Gerar relatórios de manutenção.', route: 'generate-reports' },
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
      {screen == "assign-teams" && <AssignTeam/>
      }
      {screen == "manage-status" && <MaintenanceStatusManager/>
      }
      {screen == "request-maintenance" && <MaintenanceRequestForm/>
      }
      {screen =="register-parts" && <RegisterMaintenance/>

      }
    </div>
  );
};

export default Maintenance;
