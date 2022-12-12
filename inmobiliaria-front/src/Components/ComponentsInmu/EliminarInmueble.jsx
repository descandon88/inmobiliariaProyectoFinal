import React, { useState } from "react";
import { eliminar } from "../../Api/Rule_auth_inmobiliaria";


import {
  FormControl,
  FormLabel,
  Button,
  Input,
  Flex,
} from "@chakra-ui/react";

function EliminarInmueble(props) {
  const {consultarInmuebles} = props
  const [idInmueble, setIdInmueble] = useState("");

  const handleIdInmueble = (e) => {
    setIdInmueble(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 

    await eliminar(idInmueble)
      .then(() => {
        alert("Inmueble eliminado");
        consultarInmuebles();
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
          <FormLabel fontSize="3xl" >Eliminar Inmueble</FormLabel>
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
            value={idInmueble}
            onChange={handleIdInmueble}
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
          _hover={{
            background: 'var(--gray-second)'
          }}
        >
          Eliminar Inmueble
        </Button>
        </Flex>
      </form>
    </>
  );
}

export default EliminarInmueble;