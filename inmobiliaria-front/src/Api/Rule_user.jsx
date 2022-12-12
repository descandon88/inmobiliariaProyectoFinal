import API from "./Rule_Api";

<<<<<<< HEAD
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
=======
>>>>>>> 925ee2dfb18893167460067219b896c7352766b6

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
<<<<<<< HEAD
=======
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
>>>>>>> 925ee2dfb18893167460067219b896c7352766b6
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};

<<<<<<< HEAD

=======
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
>>>>>>> 925ee2dfb18893167460067219b896c7352766b6
