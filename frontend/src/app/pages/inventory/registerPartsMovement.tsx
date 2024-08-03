"use client"
import React, { useState } from 'react';

// Lista de peças de exemplo
const partsList = [
  { id: 1, name: 'Peça A' },
  { id: 2, name: 'Peça B' },
  { id: 3, name: 'Peça C' },
];

function RegisterPartsMovement() {
  const [partId, setPartId] = useState<number>(partsList[0].id);
  const [date, setDate] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(0);
  const [movementType, setMovementType] = useState<string>('entrada');
  const [movements, setMovements] = useState<{ date: string; quantity: number; movementType: string; partName: string }[]>([]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const partName = partsList.find(part => part.id === partId)?.name || '';
    if (date && quantity > 0 && movementType && partName) {
      setMovements([...movements, { date, quantity, movementType, partName }]);
      setDate('');
      setQuantity(0);
      setMovementType('entrada');
      setPartId(partsList[0].id);
    }
  };

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h2 className="text-2xl font-bold mb-4">Registrar Entrada e Saída de Peças</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Peça</label>
          <select
            className="w-full border border-gray-300 p-2 rounded mt-1"
            value={partId}
            onChange={(e) => setPartId(parseInt(e.target.value))}
            required
          >
            {partsList.map((part) => (
              <option key={part.id} value={part.id}>{part.name}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Data</label>
          <input
            type="date"
            className="w-full border border-gray-300 p-2 rounded mt-1"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Quantidade</label>
          <input
            type="number"
            className="w-full border border-gray-300 p-2 rounded mt-1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Tipo de Movimento</label>
          <select
            className="w-full border border-gray-300 p-2 rounded mt-1"
            value={movementType}
            onChange={(e) => setMovementType(e.target.value)}
            required
          >
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Registrar Movimento
        </button>
      </form>

      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Movimentações de Peças</h3>
        <ul className="list-disc pl-5">
          {movements.map((movement, index) => (
            <li key={index} className="flex justify-between">
              {`${movement.date} - ${movement.partName} - ${movement.quantity} - ${movement.movementType}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RegisterPartsMovement;
