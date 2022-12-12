import React from "react";
import { useForm } from "react-hook-form";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/react";
import { registrarUsuario } from "../../../Api/Rule_user";


function RegisterUser() {
  
      
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (data) => {
        await registrarUsuario(data)
          .then(() => {
            alert("El usuario se regsitro correctamente")
          })
          .catch((error) => {
            alert(error);
          });
        }
  return (
    <>
    <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Nuevo usuario
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            
              <div className="container-form ctn-form">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <h2 className="title-form">Añadir nuevo usuario</h2>

              <label>
                <input
                  className="input-form"
                  placeholder="Nombre"
                  type="text"
                  {...register("nombre", {
                    required: true,
                  })}
                />
                <br />
      {errors.nombre?.type === "required" && <span>El nombre es requerido</span>}
              </label>

              <br />

              <label>
                <input
                  className="input-form"
                  placeholder="Email"
                  required
                  type="email"
                  {...register("email", {
                    required: true,
                  })}
                />
                <br />
      {errors.email?.type === "required" && <span>El email es requerido</span>}
              </label>

              <br />

              <label>
                <input
                  className="input-form"
                  placeholder="Password"
                  required
                  autoComplete="none"
                  type="password"
                 
                  {...register("password", { required: true, minLength: 8 })}
                />
                <br />
      {errors.password?.type === "required" && <span>El password es requerido</span>}
      {errors.password?.type === "minLength" && <span>Como minimo 8 caracterers</span>}
              </label>

              <label>
                <select
                className="input-form"
                >
              <option>Seleccione tipo de usuario</option>
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
         
        </select>
              </label>

              <br />
              <br />

              <div className="container-btn">
                <button className="btn" type="submit">
                  Añadir usuario
                </button>
              </div>
            </form>
          </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
  

  </>
  )
}

export default RegisterUser