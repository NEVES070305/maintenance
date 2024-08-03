import React, { useState } from 'react';

interface Collaborator {
  id: number;
  name: string;
  specialty: string;
  available: boolean;
}

const initialCollaborators: Collaborator[] = [
  { id: 1, name: 'João', specialty: 'Mecânico', available: true },
  { id: 2, name: 'Maria', specialty: 'Eletricista', available: false },
  // ... outros colaboradores
];

const ManageCollaboratorAvailability: React.FC = () => {
  const [collaborators, setCollaborators] = useState<Collaborator[]>(initialCollaborators);

  const toggleAvailability = (id: number) => {
    setCollaborators(
      collaborators.map((collaborator) =>
        collaborator.id === id ? { ...collaborator, available: !collaborator.available } : collaborator
      )
    );
  };

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h2 className="text-2xl font-bold mb-4">Gerenciar Disponibilidade dos Colaboradores</h2>
      <ul className="list-disc pl-5">
        {collaborators.map((collaborator) => (
          <li key={collaborator.id} className="mb-2 flex justify-between">
            <span>{`${collaborator.name} - ${collaborator.specialty}`}</span>
            <button
              onClick={() => toggleAvailability(collaborator.id)}
              className={`px-4 py-2 rounded ${collaborator.available ? 'bg-green-500' : 'bg-red-500'} text-white`}
            >
              {collaborator.available ? 'Disponível' : 'Indisponível'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageCollaboratorAvailability;
