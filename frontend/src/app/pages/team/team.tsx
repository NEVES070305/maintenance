import { useState } from "react";
import RegisterMaintenanceTeam from "./registerMaintenanceTeam";
import CreateUserPage from "../user/createUser";

function Team(){
  const [screen, setScreen] = useState<string>("main");
  const cards = [
    { title: 'Cadastro de Equipes', description: 'Cadastrar equipes.', route: 'register-team' },
    { title: 'Cadastro de usuários', description: 'Cadastrar usuários.', route: 'register-user' }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Cadastrar Equipes</h1>
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
      {screen == "register-team" &&
        <RegisterMaintenanceTeam/>
      }
      {screen == "register-user" &&
        <CreateUserPage/>
      }
    </div>
  );
}
export default Team;