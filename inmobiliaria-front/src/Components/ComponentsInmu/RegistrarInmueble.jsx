import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { agregarInmueble } from "../../Api/Rule_auth_inmobiliaria";
import HeaderAdmin from "../../Components/Header/HeaderAdmin/HeaderAdmin";
import "./compInmu.css";

import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Divider,
  Flex,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";

function RegistroInmueble() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("m2_edificado", data.m2_edificado);
    formData.append("m2_terreno", data.m2_terreno);
    formData.append("precio", data.precio);
    formData.append("ciudad", data.ciudad);
    formData.append("departamento", data.departamento);
    formData.append("tipo_operacion", data.tipo_operacion);
    formData.append("tipo_inmueble", data.tipo_inmueble);
    formData.append("dromitorio", data.dormitorio);
    formData.append("banio", data.banio);
    formData.append("direccion", data.direccion);
    formData.append("descripcion", data.descripcion);
    formData.append("garantia", data.garantia);
    formData.append("barrio", data.barrio);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    await agregarInmueble(formData, config)
      .then(() => {
        alert("Su registro de realizado con exito");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <HeaderAdmin />
      <Flex mx="27rem" mt="10">
        <Breadcrumb fontSize="2xl">
          <BreadcrumbItem>
            <Link to="/homeAdmin">Inicio</Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link to="/gestionPublicaciones">Gestión de publicaciones</Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage color="var(--red)">
            <Link to="/registrarInmueble">Crear Publicaciones</Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>

      <Flex mx="27rem" mt="20" justifyContent="space-between">
        <form onSubmit={handleSubmit(onSubmit)} className="formRegistrarInmu">
          <Heading mb="32">Nueva publicación</Heading>

          <Select
            name="Tipo de operacion"
            required
            placeholder="Tipo de operación"
            fontSize="2xl"
            bg="var(--gray)"
            border="none"
            h="20"
            size="lg"
            rounded="20"
            my="10"
          >
            <option
              {...register("tipo_operacion", { required: true })}
              value="venta"
            >
              Venta
            </option>
            <option
              value="alquiler"
              {...register("tipo_operacion", { required: true })}
            >
              Alquiler
            </option>
          </Select>

          <Select
            name="Tipo de inmueble"
            required
            placeholder="Tipo de inmueble"
            fontSize="2xl"
            bg="var(--gray)"
            border="none"
            h="20"
            size="lg"
            rounded="20"
            my="10"
          >
            <option
              {...register("tipo_inmueble", { required: true })}
              value="Apartamento"
            >
              Apartamento
            </option>
            <option
              value="Casa"
              {...register("tipo_inmueble", { required: true })}
            >
              Casa
            </option>
            <option
              value="Terreno"
              {...register("tipo_inmueble", { required: true })}
            >
              Terreno
            </option>
          </Select>

          <Divider my="10"></Divider>

          <Flex gap="10">
            <Input
              fontSize="2xl"
              placeholder="Cant.Baños"
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
              mt="10"
              _placeholder={{ opacity: 8, color: "var(--black)" }}
              type="number"
              {...register("banio")}
            />

            <Input
              fontSize="2xl"
              placeholder="Cant. Dormitorios"
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
              _placeholder={{ opacity: 8, color: "var(--black)" }}
              my="10"
              type="number"
              {...register("dormitorio")}
            />
          </Flex>
          <Divider my="10"></Divider>

          <Flex gap="5">
            
            <Input
              fontSize="2xl"
              autoComplete
              placeholder="Superficie del terreno"
              required
              bg="var(--gray)"
              border="none"
              _focus={{
                border: "1px solid var(--red)",
              }}
              py="10"
              size="lg"
              rounded="20"
              my="10"
              _placeholder={{ opacity: 8, color: "var(--black)" }}
              type="number"
              {...register("m2_terreno", { required: true })}
            />
            <br />
            {errors.m2_terreno?.type === "required" && (
              <span>La superficia es requerida</span>
            )}

            <Input
              fontSize="2xl"
              placeholder=" Superficie edificada"
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
              my="10"
              _placeholder={{ opacity: 8, color: "var(--black)" }}
              type="number"
              {...register("m2_edificado")}
            />
          </Flex>
          <Divider my="10"></Divider>

          <Flex gap="10">
            <Flex direction="column" w="50%">
        
              <Input
                fontSize="2xl"
                autoComplete
                placeholder="Departamento"
                required
                bg="var(--gray)"
                border="none"
                _focus={{
                  border: "1px solid var(--red)",
                }}
                py="10"
                size="lg"
                rounded="20"
                my="10"
                _placeholder={{ opacity: 8, color: "var(--black)" }}
                type="text"
                {...register("departamento", { required: true })}
              />
              <br />
              {errors.departamento?.type === "required" && (
                <span>El departamento es requerido</span>
              )}
            
              <Input
                fontSize="2xl"
                autoComplete
                placeholder="Ciudad"
                required
                bg="var(--gray)"
                border="none"
                _focus={{
                  border: "1px solid var(--red)",
                }}
                py="10"
                size="lg"
                rounded="20"
                my="10"
                _placeholder={{ opacity: 8, color: "var(--black)" }}
                type="text"
                {...register("ciudad", { required: true })}
              />
              <br />
              {errors.ciudad?.type === "required" && (
                <span>La ciudad es requerida</span>
              )}
            </Flex>

            <Flex direction="column" w="50%">
            
              <Input
                fontSize="2xl"
                placeholder="Barrio"
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
                my="10"
                _placeholder={{ opacity: 8, color: "var(--black)" }}
                type="text"
                {...register("barrio")}
              />

           

              <Input
                fontSize="2xl"
                autoComplete
                placeholder="Dirección"
                required
                bg="var(--gray)"
                border="none"
                _focus={{
                  border: "1px solid var(--red)",
                }}
                py="10"
                size="lg"
                rounded="20"
                my="10"
                _placeholder={{ opacity: 8, color: "var(--black)" }}
                type="text"
                {...register("direccion", { required: true })}
              />
              <br />
              {errors.direccion?.type === "required" && (
                <span>La direccion es requerida</span>
              )}
            </Flex>
          </Flex>

          <Divider my="10"></Divider>
          <Flex gap="10">
            

            <Flex flexDirection="column" w="50%">
              <Input
                fontSize="2xl"
                placeholder="Garantía"
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
                my="10"
                _placeholder={{ opacity: 8, color: "var(--black)" }}
                type="text"
                {...register("garantia")}
              />

      
              <Input
                fontSize="2xl"
                autoComplete
                placeholder="Precio"
                required
                bg="var(--gray)"
                border="none"
                _focus={{
                  border: "1px solid var(--red)",
                }}
                py="10"
                size="lg"
                rounded="20"
                my="10"
                _placeholder={{ opacity: 8, color: "var(--black)" }}
                type="number"
                {...register("precio", { required: true })}
              />
              <br />
              {errors.precio?.type === "required" && (
                <span>El precio es requerida</span>
              )}
            </Flex>

          
            <Textarea
              placeholder="Descripción"
              minH="60"
              fontSize="2xl"
              bg="var(--gray)"
              border="none"
              rounded="20"
              my="10"
              py="10"
              _placeholder={{ opacity: 8, color: "var(--black)" }}
              {...register("descripcion")}
            />
          </Flex>
          <Divider my="10"></Divider>
          <FormLabel htmlFor="imagen" fontSize="3xl" ml="3">
            Imagen
          </FormLabel>
          <Input
            placeholder="Imagen"
            fontSize="2xl"
            autoComplete
            required
            bg="var(--gray)"
            border="none"
            _focus={{
              border: "1px solid var(--red)",
            }}
            h="20"
            rounded="20"
            my="2"
            type="file"
            {...register("file", {
              required: false,
              validate: (value) => value[0].size <= 10000000, //1MB
            })}
          />
          <br />
          {errors.file?.type === "required" && (
            <span>La imagen es requerida</span>
          )}
          {errors.file?.type === "validate" && (
            <span>Tamanio maximo de 1MB</span>
          )}

          <Flex justifyContent="flex-end" my="10">
            <Button
              mt="10"
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
              Crear publicación
            </Button>
          </Flex>
        </form>
      </Flex>
    </>
  );
}

export default RegistroInmueble;
