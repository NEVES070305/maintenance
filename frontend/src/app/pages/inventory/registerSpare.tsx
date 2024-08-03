import React, { useState } from 'react';

function RegisterSpareParts () {
  const [name, setName] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [supplier, setSupplier] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(0);
  const [unitPrice, setUnitPrice] = useState<number>(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ name, code, supplier, quantity, unitPrice });
    setName('');
    setCode('');
    setSupplier('');
    setQuantity(0);
    setUnitPrice(0);
  };

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h2 className="text-2xl font-bold mb-4">Cadastrar Peças de Reposição</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Nome da Peça</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Código</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded mt-1"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Fornecedor</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded mt-1"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Quantidade em Estoque</label>
          <input
            type="number"
            className="w-full border border-gray-300 p-2 rounded mt-1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Valor Unitário</label>
          <input
            type="number"
            step="0.01"
            className="w-full border border-gray-300 p-2 rounded mt-1"
            value={unitPrice}
            onChange={(e) => setUnitPrice(parseFloat(e.target.value))}
            required
          />
        </div>

        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Cadastrar Peça
        </button>
      </form>
    </div>
  );
};

export default RegisterSpareParts;
