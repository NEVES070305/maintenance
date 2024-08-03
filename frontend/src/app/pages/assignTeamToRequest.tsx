import React, { useState } from 'react';

interface Request {
  id: number;
  description: string;
}

interface Team {
  id: number;
  name: string;
}

const requests: Request[] = [
  { id: 1, description: 'Manutenção no motor' },
  { id: 2, description: 'Troca de óleo' },
  // ... outras solicitações
];

const teams: Team[] = [
  { id: 1, name: 'Equipe A' },
  { id: 2, name: 'Equipe B' },
  // ... outras equipes
];

const AssignTeamToRequest: React.FC = () => {
  const [selectedRequest, setSelectedRequest] = useState<number>(requests[0].id);
  const [selectedTeam, setSelectedTeam] = useState<number>(teams[0].id);
  const [assignments, setAssignments] = useState<{ requestId: number; teamId: number }[]>([]);

  const handleAssign = () => {
    setAssignments([...assignments, { requestId: selectedRequest, teamId: selectedTeam }]);
  };

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h2 className="text-2xl font-bold mb-4">Atribuir Equipes às Solicitações de Manutenção</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Solicitação de Manutenção</label>
        <select
          className="w-full border border-gray-300 p-2 rounded mt-1"
          value={selectedRequest}
          onChange={(e) => setSelectedRequest(parseInt(e.target.value))}
        >
          {requests.map((request) => (
            <option key={request.id} value={request.id}>
              {request.description}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Equipe</label>
        <select
          className="w-full border border-gray-300 p-2 rounded mt-1"
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(parseInt(e.target.value))}
        >
          {teams.map((team) => (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleAssign}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Atribuir Equipe
      </button>

      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Atribuições</h3>
        <ul className="list-disc pl-5">
          {assignments.map((assignment, index) => (
            <li key={index}>
              {`Solicitação: ${requests.find((r) => r.id === assignment.requestId)?.description}, Equipe: ${teams.find((t) => t.id === assignment.teamId)?.name}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AssignTeamToRequest;
