import React, {useState, useEffect} from 'react'
import {infoUser} from '../../Api/Rule_user';

function NameUser() {
  const [nameUser, setNameUser] = useState([]);

  const infUser = async () => {
    await infoUser()
      .then((response) => {
        setNameUser(response);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    infUser();
  }, []);
    
    
  return (
    <>{nameUser}</>
  )
}

export default NameUser;
