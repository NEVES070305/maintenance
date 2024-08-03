import React, { useState } from 'react';

const RegisterMaintenance: React.FC = () => {
  const [material, setMaterial] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(0);
  const [supplier, setSupplier] = useState<string>('');
  const [materials, setMaterials] = useState<{ material: string; quantity: number; supplier: string }[]>([]);

  const handleAddMaterial = () => {
    if (material && quantity > 0 && supplier) {
      setMaterials([...materials, { material, quantity, supplier }]);
      setMaterial('');
      setQuantity(0);
      setSupplier('');
    }
  };

  const handleDeleteMaterial = (index: number) => {
    setMaterials(materials.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded p-6">
        <h2 className="text-2xl font-bold mb-4">Registrar Materiais Utilizados</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Material</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded mt-1"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Quantidade</label>
          <input
            type="number"
            className="w-full border border-gray-300 p-2 rounded mt-1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Fornecedor</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded mt-1"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
          />
        </div>

        <button
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddMaterial}
        >
          Adicionar Material
        </button>

        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Materiais Utilizados</h3>
          <ul className="list-disc pl-5">
            {materials.map((item, index) => (
              <li key={index} className="flex justify-between">
                {`${item.material} - ${item.quantity} - ${item.supplier}`}
                <button
                  className="text-red-500"
                  onClick={() => handleDeleteMaterial(index)}
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegisterMaintenance;
