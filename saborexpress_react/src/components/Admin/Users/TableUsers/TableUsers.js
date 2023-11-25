import React from 'react';
import "./TableUsers.scss";
import {Table, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";

export function TableUsers(props) {
    const {users} = props;

  return (
   <Table>  
        <Table.Header>
            <Table.Row>
            <Table.HeaderCell>Username</Table.HeaderCell>
            <Table.HeaderCell>email</Table.HeaderCell>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Apellidos</Table.HeaderCell>
            <Table.HeaderCell>Activo</Table.HeaderCell>
            <Table.HeaderCell>Staff</Table.HeaderCell>
            <Table.HeaderCell>Username</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {map(users, (user, index) => (
                <Table.Row key={index}>
                    <Table.Cell>{user.username}</Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell>{user.first_ame}</Table.Cell>
                    <Table.Cell>{user.last_name}</Table.Cell>
                    <Table.Cell>0 - Active</Table.Cell>
                    <Table.Cell>0 - Staff</Table.Cell>
                    <Table.Cell>0 - Actions</Table.Cell>
                </Table.Row>

            ))}
        </Table.Body>
   </Table>
  )
}
