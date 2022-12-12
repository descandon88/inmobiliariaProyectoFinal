import React, { useState } from "react";
import { eliminarUsuarios } from "../../Api/Rule_user";

import {
  FormControl,
  FormLabel,
  Button,
  Input,
  Flex,
} from "@chakra-ui/react";

function DeleteUser() {
  const [idUser, setIdUser] = useState("");

  const handleIdUser = (e) => {
    setIdUser(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await eliminarUsuarios(idUser)
      .then(() => {
        alert("El usuario se ha eliminado");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Flex  alignItems='center' my='20'>

        <FormControl w="20%" pr='15'>
          <FormLabel fontSize="3xl" >Eliminar usuario</FormLabel>
          <Input
          bg="var(--gray)"
          border='none'
            _focus={{
              border: '1px solid var(--red)',
            }}
            p="3"
            size="2xl"
            rounded='10'
            placeholder="ejemplo: 6"
            autoComplete="none"
            type="number"
            value={idUser}
            onChange={handleIdUser}
          />
        </FormControl>


        <Button
          fontSize="2xl"
          bg="var(--gray)"
          color="var(--black)"
          textAlign='center'
          p="9"
          mt='12'
          rounded="20"
          type="submit"
        >
          Eliminar usuario
        </Button>
        </Flex>
      </form>
    </>
  );
}

export default DeleteUser;
