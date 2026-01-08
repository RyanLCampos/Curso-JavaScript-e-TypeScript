/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaAd,
  FaPlus,
} from 'react-icons/fa';

import { Container } from './styled';
import { AlunoContainer, ProfilePicture } from './styled';
import { StyledButton, Titulo } from './styled';
import axios from '../../services/axios';

import Loading from '../../components/Loading/';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/alunos');
      console.log(response.data);
      setAlunos(response.data);
      setIsLoading(false);
    }

    getData();
  }, []);

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <div className="relative flex flex-col w-full bg-white shadow-md rounded-xl">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div>
            <Titulo className="text-lg font-semibold text-slate-800">
              Lista de Alunos
            </Titulo>
            <p className="text-sm text-slate-500">
              Gerencie os alunos cadastrados
            </p>
          </div>

          <Link to={'/register'}>
            <StyledButton
              className="flex items-center transition-colors gap-2"
              fullWidth
            >
              <FaPlus size={13} />
              Novo Aluno
            </StyledButton>
          </Link>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="bg-slate-50 border-b">
                <th className="p-4 text-sm font-medium text-slate-500">
                  Aluno
                </th>
                <th className="p-4 text-sm font-medium text-slate-500">
                  Email
                </th>
                <th className="p-4 text-sm font-medium text-slate-500">
                  Ações
                </th>
              </tr>
            </thead>

            <tbody>
              {alunos.map((aluno) => (
                <tr key={aluno.id} className="border-b hover:bg-slate-50">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <ProfilePicture>
                        {get(aluno, 'Fotos[0].url') ? (
                          <img
                            crossOrigin="anonymous"
                            src={get(aluno, 'Fotos[0].url')}
                            alt="Aluno"
                          />
                        ) : (
                          <FaUserCircle size={36} />
                        )}
                      </ProfilePicture>

                      <div>
                        <p className="text-sm font-semibold text-slate-700">
                          {aluno.nome} {aluno.sobrenome}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="p-4 text-sm text-slate-600">{aluno.email}</td>

                  <td className="p-4">
                    <div className="flex gap-2">
                      <Link
                        to={`/aluno/${aluno.id}/edit`}
                        className="p-2 rounded hover:bg-slate-200"
                      >
                        <FaEdit />
                      </Link>

                      <Link
                        to={`/aluno/${aluno.id}/delete`}
                        className="p-2 rounded hover:bg-red-100 text-red-600"
                      >
                        <FaWindowClose />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}

              {alunos.length === 0 && !isLoading && (
                <tr>
                  <td colSpan="3" className="p-6 text-center text-slate-500">
                    Nenhum aluno cadastrado
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}
