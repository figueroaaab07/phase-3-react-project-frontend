import React, { useState, useEffect } from 'react';
import UserForm from "./UserForm";
import UserTable from "./UserTable";

function Users( {selectUser} ) {

  const [users, setUsers] = useState([]);

  async function getUsers() {
    const response = await fetch("http://localhost:9292/users");
    const json = await response.json();
    setUsers(users => users.concat(json));
  };
  
  useEffect(() => {
    getUsers();
  }, []);

  async function addUser(user, new_birth_date) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name: user.first_name,
        last_name: user.last_name,
        birth_date: new_birth_date
      })
    };
    const response = await fetch("http://localhost:9292/users", requestOptions);
    const json = await response.json();
    setUsers(users => users.concat(json));
  };

  async function deleteUser(id) {
    const response = await fetch(`http://localhost:9292/users/${id}`, { method: 'DELETE' });
    const json = await response.json();
    setUsers(users => users.filter((user) => user.id !== id));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="five columns">
          <h2>Add user</h2>
          <UserForm addUser={addUser} />
        </div>
        </div>
        <div className="seven columns">
          <h2>View users</h2>
          <UserTable
            users={users}
            selectUser={selectUser}
            deleteUser={deleteUser}
        />
      </div>
    </div>
  );
}

export default Users;