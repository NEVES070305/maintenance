import React, { useState } from 'react';

interface Collaborator {
  name: string;
  specialty: string;
}

interface Team {
  teamName: string;
  collaborators: Collaborator[];
}

const RegisterMaintenanceTeam: React.FC = () => {
  const [teamName, setTeamName] = useState<string>('');
  const [collaboratorName, setCollaboratorName] = useState<string>('');
  const [specialty, setSpecialty] = useState<string>('');
  const [collaborators, setCollaborators] = useState<Collaborator[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);

  const handleAddCollaborator = () => {
    if (collaboratorName && specialty) {
      setCollaborators([...collaborators, { name: collaboratorName, specialty }]);
      setCollaboratorName('');
      setSpecialty('');
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (teamName && collaborators.length > 0) {
      setTeams([...teams, { teamName, collaborators }]);
      setTeamName('');
      setCollaborators([]);
    }
  };

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h2 className="text-2xl font-bold mb-4">Cadastrar Equipe de Manutenção</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Nome da Equipe</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded mt-1"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Nome do Colaborador</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded mt-1"
            value={collaboratorName}
            onChange={(e) => setCollaboratorName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Especialidade</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded mt-1"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
          />
        </div>

        <button
          type="button"
          onClick={handleAddCollaborator}
          className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Adicionar Colaborador
        </button>

        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Colaboradores</h3>
          <ul className="list-disc pl-5">
            {collaborators.map((collaborator, index) => (
              <li key={index}>{`${collaborator.name} - ${collaborator.specialty}`}</li>
            ))}
          </ul>
        </div>

        <button
          type="submit"
          className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
        >
          Cadastrar Equipe
        </button>
      </form>

      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Equipes de Manutenção</h3>
        <ul className="list-disc pl-5">
          {teams.map((team, index) => (
            <li key={index}>
              <strong>{team.teamName}</strong>
              <ul className="list-disc pl-5">
                {team.collaborators.map((collaborator, idx) => (
                  <li key={idx}>{`${collaborator.name} - ${collaborator.specialty}`}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RegisterMaintenanceTeam;
