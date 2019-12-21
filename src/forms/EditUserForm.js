import React, { useState, useEffect } from "react";

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]); //efek akan dilewati jika nilai-nilai tertentu tidak berubah di antara yang dirender ulang. [ props ]
  // controlled input
  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      className="form-group"
      onSubmit={event => {
        event.preventDefault();

        props.updateUser(user.id, user);
      }}
    >
      <label>Name</label>
      <input
        className="form-control"
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        className="form-control"
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button className="btn btn-dark mt-3 mr-2">Update user</button>
      <button
        className="btn btn-light mt-3"
        onClick={() => props.setEditing(false)}
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
