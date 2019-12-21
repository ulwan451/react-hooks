import React, { useState, Fragment } from "react";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";

const App = () => {
  // default data user
  const usersData = [
    { id: 1, name: "simkuring1", username: "kuring1" },
    { id: 2, name: "simkuring2", username: "kuring2" },
    { id: 3, name: "simkuring3", username: "kuring3" }
  ];

  // initialState
  const initialFormState = { id: null, name: "", username: "" };
  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // membuat fungsi CRUD
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setEditing(false);

    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const editRow = user => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  return (
    <div className="container mt-3">
      <h1 className="mb-5">CRUD App with Hooks</h1>
      <div className="row">
        <div className="col-md-5">
          {editing ? (
            <Fragment>
              <h3>Edit user</h3>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h3>Add user</h3>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
        </div>
        <div className="col-md-7">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
