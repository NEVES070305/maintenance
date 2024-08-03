import React, { useState } from 'react';

const AssignTeam: React.FC = () => {
  const teams = [
    "Funilaria",
    "Pintura",
    "Rosa"
  ]
  const [teamSelected, setTeamSelected] = useState<string>('');

  const handleAssign = (e: any) => {
    e.PreventDefault();
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded p-6">
        <h2 className="text-2xl font-bold mb-4">Atribuir Equipes de Manutenção</h2>
        <div className="mb-4">
          <label className="block text-gray-700">
          Equipe
          <select value={teamSelected} onChange={(e) => setTeamSelected(e.target.value)}>
            <option value="funilaria">Funilaria</option>
            <option value="pintura">Pintura</option>
          </select>
        </label>
          
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
          Manutenção
          <select value={teamSelected} onChange={(e) => setTeamSelected(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </label>
          
        </div>
        <button
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAssign}
        >
          Atribuir Equipe
        </button>
      </div>
    </div>
  );
};

export default AssignTeam;
