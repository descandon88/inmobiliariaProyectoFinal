import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { listaInmuebles } from "../../Api/Rule_auth_inmobiliaria";
import EliminarInmueble from "../../Components/ComponentsInmu/EliminarInmueble";
import ListadoInmuebles from "../../Components/ComponentsInmu/ListadoInmueble";
import HeaderAdmin from "../../Components/Header/HeaderAdmin/HeaderAdmin";

import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";


function GestionPublicaciones() {

  const [inmuebles, setInmuebles] = useState([]);

  const consultarInmuebles = async () => {
    await listaInmuebles()
      .then((response) => {
        setInmuebles(response);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    consultarInmuebles();
  }, []);



  return (
    <>
      <HeaderAdmin />

      <Flex justifyContent="space-between" mx="27rem" my="20">
        <Box>
          <Text fontSize="2rem">Tablero Administrativo</Text>
          <Text fontSize="3rem" as="b">
            Publicaciones
          </Text>
        </Box>
        <Link to={"/registrarInmueble"}
          
        >
          <Button
            fontSize="2xl"
            textAlign="center"
            p='10'
            h="20"
            rounded="full"
            bg="var(--red)"
            color="var(--white)"
            gap={2}
            _hover={{
              background: "var(--red-second)",
            }}
          
          >
            <AddIcon boxSize={5} />
            Crear Publicación

          </Button>
         
        </Link>
      </Flex>

      <Flex flexDirection="column" mx="27rem" my="20">

        <EliminarInmueble consultarInmuebles={consultarInmuebles}/>
       
        <ListadoInmuebles inmuebles={inmuebles}/>
      </Flex>
    </>
  );
}

export default GestionPublicaciones;
