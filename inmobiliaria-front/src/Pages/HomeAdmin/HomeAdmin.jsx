import React from "react";
import { Link } from "react-router-dom";

import NameUser from "../../Components/ComponentsUser/NameUser";
import HeaderAdmin from "../../Components/Header/HeaderAdmin/HeaderAdmin";

import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Flex,
  Box,
  CardHeader,
  Image,
} from "@chakra-ui/react";

import "./homeAdmin.css";

function HomeAdmin() {
  return (
    <>
      <HeaderAdmin />
      <Flex flexDirection="column" justifyContent="center" mx="27rem" my="20">
        <Box className="titleAdmin">
          <Text fontSize="2rem">
            Bienvenido, {""}
            <span className="spanRed">
              <NameUser />
            </span>
          </Text>
          <Text fontSize="3rem" as="b">
            Tablero administrativo
          </Text>
          <Text fontSize="1.6rem" w="50%">
            Aquí podrás crear, modificar y eliminar tus publicaciones. También
            podrás crear nuevos usuarios.
          </Text>
        </Box>

        <Flex mt="10" gap="20">
          <Card
            textAlign="center"
            alignItems="center"
            w="50%"
            bg="var(--gray)"
            borderRadius="2rem"
            p="10"
          >
            <CardBody>
              <Image
                src="assets/user-interface.png"
                alt="Icono interface"
                w="10rem"
                display="inline-block"
              />

              <Text fontSize="2rem" my="10">
                Gestión de publicaciones
              </Text>
            </CardBody>
            <CardFooter>
              <Button
                display="flex"
                fontSize="2xl"
                p="8"
                borderRadius="2rem"
                bg="var(--red)"
                color="var(--white)"
                _hover={{
                  background: "var(--red-second)",
                }}
              >
                <Link to={"/gestionPublicaciones"}>
                  Ir a gestionar Publicaciones
                </Link>
              </Button>
            </CardFooter>
          </Card>
          

          <Card
              textAlign="center"
              alignItems="center"
              w="50%"
              bg="var(--gray)"
              borderRadius="2rem"
              p="10"
          >
            <CardBody flexDirection="column" alignItems="center">
              <Image
                src="assets/perfil.png"
                alt="Icono de casa"
                w="10rem"
                display="inline-block"
              />

              <Text fontSize="2rem" my="10">
                Gestión de usuarios
              </Text>
            </CardBody>
            <CardFooter>
              <Button
                fontSize="2xl"
                p="8"
                borderRadius="2rem"
                bg="var(--red)"
                color="var(--white)"
                _hover={{
                  background: "var(--red-second)",
                }}
              >
                <Link to={"/gestionUsuarios"}>Ir a gestionar usuarios</Link>
              </Button>
            </CardFooter>
          </Card>
        </Flex>
      </Flex>
    </>
  );
}

export default HomeAdmin;
