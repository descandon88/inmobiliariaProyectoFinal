import API from "./Rule_Api";


export const login = async (usuarios) => {
  const url = "/api/user/login";
  return await API.post(url, usuarios)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};


export const registrarUsuario = async (usuarios) => {
  const url = "/api/user/register";
  return await API.post(url, usuarios)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
    throw error.response.data.error || "Error procesando la solicitud";
  });
};

export const infoUser = async () => {
  const url = "/api/user/infoUser";
  return await API.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};

export const consultarUsuarios = async () => {
    const url = "/api/user/list";
    return await API.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        throw error.response.data.error || "Error procesando la solicitud";
      });
  };
  

  export const eliminarUsuarios = async (id_usuario) => {
    const url = `/api/user/deleteUser/${id_usuario}`;
    return await API.delete(url)
      .then((response) => {
        return response.data;
      })
      
      .catch((error) => {
        console.log(error);
        throw error.response.data.error || "Error procesando la solicitud";
      });
  };
