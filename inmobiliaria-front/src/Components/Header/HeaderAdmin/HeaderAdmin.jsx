import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NameUser from "../../ComponentsUser/NameUser";

import "./headerAdmin.css";
import {HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import {
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Image,
  Breadcrumb,
  BreadcrumbItem,
} from "@chakra-ui/react";

function HeaderAdmin() {
  const navigate = useNavigate();
  const closeSesion = () => { localStorage.removeItem("token"); navigate("/pageLogin") };

  return (
    <Flex
      minWidth="max-content"
      justifyContent="space-between"
      alignItems="center"
      h="100"
      p="30"
      bg="var(--gray)"
    >
      <Link href="/">
        <Image w="10rem" src="assets/logoSinFondoSencillo.png" alt="logo" />
      </Link>

      <Breadcrumb separator=" ">
        <BreadcrumbItem className="navList">
          <Link to={"/homeAdmin"}>Inicio</Link>
        </BreadcrumbItem>

        <BreadcrumbItem p="20" className="navList">
          <Link to={"/gestionPublicaciones"}>Publicaciones</Link>
        </BreadcrumbItem>

        <BreadcrumbItem className="navList">
          <Link to={"/gestionUsuarios"}>Usuarios</Link>
        </BreadcrumbItem>
      </Breadcrumb>

      <Menu>
        <MenuButton
          p={4}
          bg="var(--white)"
          transition="all 0.2s"
          borderRadius="3rem"
          borderWidth="1px"
          _hover={{ bg: "var(--white)" }}
          _expanded={{ bg: "var(--white)" }}
        >
          <NameUser></NameUser>
          <Avatar src="https://bit.ly/broken-link" mx="5" />
        </MenuButton>
        <MenuList p={4} borderRadius="3rem" _hover={{ bg: "var(--white)" }}>
          <MenuItem onClick={closeSesion}>
            <HiOutlineArrowRightOnRectangle />
            Cerrar Sesión
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default HeaderAdmin;
