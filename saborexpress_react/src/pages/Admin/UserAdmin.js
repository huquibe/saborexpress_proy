import React from 'react'
import { HeaderPage } from '../../components/Admin'
//import { useUser } from "../../../hooks";

export function UserAdmin() {
  /*const {loading, users, getUsers } = useUser();
  console.log('users ->', loading);
console.log('loading ->', users);*/
  return (
    <>
      <HeaderPage title="Usuarios" btnTitle="Nuevo Usuario" btnTitle2="Eliminar Usuario" />
       <h1>Estamos en UserAdmin</h1> 
    </>
  );
}

