"use client"; 
import React, { useState } from 'react';
import { GrFormEdit } from 'react-icons/gr';
import { LuEraser } from 'react-icons/lu';

const Table = () => {
  const data = [
    {
      ambiente: "Sala 1",
      equipamento: "Projetor",
      solicitacao: "Troca de lâmpada",
      atendimento: "Em andamento"
    },
    {
      ambiente: "Sala 2",
      equipamento: "Ar-condicionado",
      solicitacao: "Reparar vazamento",
      atendimento: "Concluído"
    },
    { ambiente: "Sala 3", equipamento: "Computador", solicitacao: "Atualização de software", atendimento: "Pendente" },
    { ambiente: "Sala 4", equipamento: "Impressora", solicitacao: "Troca de toner", atendimento: "Em andamento" },
    { ambiente: "Sala 5", equipamento: "Telefone", solicitacao: "Configuração de ramal", atendimento: "Concluído" },
    { ambiente: "Sala 3", equipamento: "Computador", solicitacao: "Atualização de software", atendimento: "Pendente" },
    { ambiente: "Sala 4", equipamento: "Impressora", solicitacao: "Troca de toner", atendimento: "Em andamento" },
    { ambiente: "Sala 5", equipamento: "Telefone", solicitacao: "Configuração de ramal", atendimento: "Concluído" },
    { ambiente: "Sala 3", equipamento: "Computador", solicitacao: "Atualização de software", atendimento: "Pendente" },
    { ambiente: "Sala 4", equipamento: "Impressora", solicitacao: "Troca de toner", atendimento: "Em andamento" },
    { ambiente: "Sala 5", equipamento: "Telefone", solicitacao: "Configuração de ramal", atendimento: "Concluído" },
    { ambiente: "Sala 3", equipamento: "Computador", solicitacao: "Atualização de software", atendimento: "Pendente" },
    { ambiente: "Sala 4", equipamento: "Impressora", solicitacao: "Troca de toner", atendimento: "Em andamento" },
    { ambiente: "Sala 5", equipamento: "Telefone", solicitacao: "Configuração de ramal", atendimento: "Concluído" },
  ];
    // Adicione mais dados conforme necessário

  const [maxRows, setMaxRows] = useState(3);
  const [minRows, setMinRows] = useState(0);

  const handleShowMore = () => {
    setMaxRows(maxRows + 3);
    setMinRows(minRows + 3 );
  };
  const handleShowLess = () => {
    setMaxRows(maxRows -3);
    setMinRows(minRows - 3 );
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr className='data-table'>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ambiente</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Equipamento</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Solicitação</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Atendimento</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.slice(minRows, maxRows).map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{item.ambiente}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.equipamento}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.solicitacao}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.atendimento}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex space-x-2">
                  <GrFormEdit />
                  <LuEraser />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {maxRows < data.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={()=>{handleShowMore(); }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Mostrar mais
          </button>
        </div>
      )}
      {minRows>0 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={()=>{handleShowLess();}}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Mostrar menos
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
