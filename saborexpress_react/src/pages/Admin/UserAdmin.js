import React, {useEffect} from 'react';
import {Loader} from "semantic-ui-react";
import { HeaderPage, TableUsers } from '../../components/Admin'
//import { useUser } from "../../../hooks";

export function UserAdmin() {
  /*const {loading, users, getUsers } = useUser();
  console.log('users ->', loading);
console.log('loading ->', users);*/
  return (
    <>
      <HeaderPage title="Usuarios" btnTitle="Nuevo Usuario" btnTitle2="Eliminar Usuario" />
       {loading? (
        <Loader active inline="centered">
            Cargando..
        </Loader>
       ) : (
        <TableUsers users={users}/> 
       )

       }
    </>
  );
}

