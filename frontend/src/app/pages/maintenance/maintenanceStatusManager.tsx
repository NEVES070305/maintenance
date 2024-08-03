import React, { useState } from 'react';

const MaintenanceStatusManager: React.FC = () => {
  const [status, setStatus] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [files, setFiles] = useState<File[]>([]);

  const handleAddComment = () => {
    if (comment) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  const handleDeleteComment = (index: number) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleAddFile = () => {
    if (file) {
      setFiles([...files, file]);
      setFile(null);
    }
  };

  const handleDeleteFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded p-6">
        <h2 className="text-2xl font-bold mb-4">Gerenciar Status da Manutenção</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700">Status</label>
          <select
            className="w-full border border-gray-300 p-2 rounded mt-1"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="" disabled>Selecione um status</option>
            <option value="pendente">Pendente</option>
            <option value="em andamento">Em Andamento</option>
            <option value="concluída">Concluída</option>
            <option value="cancelada">Cancelada</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Adicionar Comentário</label>
          <textarea
            className="w-full border border-gray-300 p-2 rounded mt-1"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleAddComment}
          >
            Adicionar Comentário
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Adicionar Arquivo</label>
          <input
            type="file"
            className="w-full border border-gray-300 p-2 rounded mt-1"
            onChange={handleFileChange}
          />
          <button
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleAddFile}
          >
            Adicionar Arquivo
          </button>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold">Comentários</h3>
          <ul className="list-disc list-inside">
            {comments.map((comment, index) => (
              <li key={index} className="flex justify-between items-center">
                {comment}
                <button
                  className="text-red-500 ml-2"
                  onClick={() => handleDeleteComment(index)}
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">Arquivos</h3>
          <ul className="list-disc list-inside">
            {files.map((file, index) => (
              <li key={index} className="flex justify-between items-center">
                {file.name}
                <button
                  className="text-red-500 ml-2"
                  onClick={() => handleDeleteFile(index)}
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Salvar
          </button>
      </div>
    </div>
  );
};

export default MaintenanceStatusManager;
