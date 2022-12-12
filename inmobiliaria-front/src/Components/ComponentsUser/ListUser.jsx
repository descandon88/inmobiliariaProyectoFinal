import React, { useState, useEffect } from "react";
import { consultarUsuarios } from "../../Api/Rule_user";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

function ListUsers() {
  const [usuarios, setUsuarios] = useState([]);

  const listarUsuarios = async () => {
    await consultarUsuarios()
      .then((response) => {
        setUsuarios(response);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    listarUsuarios();
  }, []);

  return (
    <>
      <TableContainer>
        <Table variant="simple" size="lg">
          <Thead >
            <Tr>
              <Th fontSize='2xl'>Id del usuario</Th>
              <Th fontSize='2xl'>Nombre</Th>
              <Th fontSize='2xl'>Email</Th>
            </Tr>
          </Thead>
          <Tbody>
            {usuarios &&
              usuarios.map((usuario) => {
                return (
                  <Tr key={usuario.id}>
                    <Td p="5">{usuario.id_usuario}</Td>
                    <Td>{usuario.nombre}</Td>
                    <Td>{usuario.email}</Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ListUsers;
