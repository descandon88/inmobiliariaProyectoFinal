import React from "react";
import { useForm } from "react-hook-form";
import { registrarUsuario } from "../../Api/Rule_user";

import { AddIcon } from "@chakra-ui/icons";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormErrorMessage,
  Input,
  Select
} from "@chakra-ui/react";

function RegisterUser() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await registrarUsuario(data)
      .then(() => {
        alert("El usuario se regsitro correctamente");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
  
      <Button
        onClick={onOpen}
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
        Crear Usuario
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered borderRadius="xxl" >
        <ModalOverlay />
        <ModalContent
          w="50%"
          h="auto"
          maxW="4xl"
          rounded="2xl"
          p="5"
        >
          <ModalHeader fontSize="5xl" mb="5">
            Crear usuario
          </ModalHeader>
          <ModalCloseButton m="5" size={20}></ModalCloseButton>
          <ModalBody pb={10}>
            <form onSubmit={handleSubmit(onSubmit)} p="5">
              <Input
                autoComplete
                required
                bg="var(--gray)"
                border="none"
                _focus={{
                  border: "1px solid var(--red)",
                }}
                py="10"
                size="lg"
                rounded="20"
                my="5"
                placeholder="Nombre"
                type="text"
                {...register("nombre", {
                  required: true,
                })}
              />
              <FormErrorMessage>
                {errors.nombre?.type === "required" && (
                  <span>El nombre es requerido</span>
                )}
              </FormErrorMessage>

              <br />

              <Input
                autoComplete
                fontSize="xxl"
                bg="var(--gray)"
                border="none"
                _focus={{
                  border: "1px solid var(--red)",
                }}
                py="10"
                size="lg"
                rounded="20"
                my="5"
                className="input-form"
                placeholder="Email"
                required
                type="email"
                {...register("email", {
                  required: true,
                })}
              />
              <FormErrorMessage>
                {errors.email?.type === "required" && (
                  <span>El email es requerido</span>
                )}
              </FormErrorMessage>

              <br />

              <Input
                autoComplete
                fontSize="xxl"
                bg="var(--gray)"
                border="none"
                _focus={{
                  border: "1px solid var(--red)",
                }}
                py="10"
                size="lg"
                rounded="20"
                my="5"
                className="input-form"
                placeholder="Contraseña"
                required
                type="password"
                {...register("password", { required: true, minLength: 8 })}
              />

              <FormErrorMessage>
                {errors.password?.type === "required" && (
                  <span>El password es requerido</span>
                )}
              </FormErrorMessage>

              <FormErrorMessage>
                {errors.password?.type === "minLength" && (
                  <span>Como minimo 8 caracterers</span>
                )}
              </FormErrorMessage>


              <Select
                required
                placeholder="Tipo de usuario"
                fontSize="xxl"
                bg="var(--gray)"
                border="none"
                h='20'
                size="lg"
                rounded="20"
                my="5"
              >
                <option
                  {...register("tipo_usuario", {
                    required: true,
                  })}
                  value="1"
                >
                  Administrador
                </option>
                <option
                  value="2"
                  {...register("tipo_usuario", {
                    required: true,
                  })}
                >
                  Usuario
                </option>
              </Select>

              <ModalFooter>
             
              <Button
                mt='10'
                fontSize="2xl"
                bg="var(--red)"
                color="var(--white)"
                p="10"
                rounded="20"
                type="submit"
                _hover={{
                  background: "var(--red-second)",
                }}
              >
                Añadir usuario
              </Button>
          </ModalFooter>
            </form>
          </ModalBody>

           
        </ModalContent>
      </Modal>
    </>
  );
}

export default RegisterUser;
