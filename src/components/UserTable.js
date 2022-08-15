import React from 'react';

function UserTable( {users, selectUser, deleteUser} ) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Birth Day</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        { users.length > 0 ? (
          users.map(user => {
            const {id, first_name, last_name, birth_date} = user;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{first_name + " " + last_name}</td>
                <td>{birth_date}</td>
                <td>
                  <button onClick={() => selectUser(user)}>Select</button>
                </td>
                <td>
                  <button onClick={() => deleteUser(id)}>Delete</button>
                </td>
              </tr>
            )
          })
          ) : (
            <tr>
              <td colSpan={4}>No users found</td>
            </tr>
          )   
        }
      </tbody>
    </table>
  )
}

export default UserTable