import React from "react";
import HeaderAdmin from "../../Components/Header/HeaderAdmin/HeaderAdmin";
import ListUsers from "../../Components/ComponentsUser/ListUser";
import RegisterUser from "../../Components/ComponentsUser/RegisterUser";
import DeleteUser from "../../Components/ComponentsUser/DeleteUser";

import { Text, Flex, Box } from "@chakra-ui/react";


function GestionUsuarios() {
  return (
    <>
      <HeaderAdmin />

      <Flex justifyContent="space-between" mx="27rem" my="20">
        <Box>
          <Text fontSize="2rem">Tablero Administrativo</Text>
          <Text fontSize="3rem" as="b">
            Usuarios
          </Text>
        </Box>
        <RegisterUser />
      </Flex>

      <Flex flexDirection="column" mx="27rem" my="20">
        <DeleteUser />
        <ListUsers />
      </Flex>
    </>
  );
}

export default GestionUsuarios;
