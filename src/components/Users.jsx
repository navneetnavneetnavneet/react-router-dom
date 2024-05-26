import axios from "../helper/axios";
import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Users = () => {
  const { pathname } = useLocation();
  const [users, setUsers] = useState([]);

  // axios call
  const getUsers = async () => {
    const { data } = await axios.get("/users");
    setUsers(data);
    // console.log(data);
  };

  return (
    <div className="mt-5">
      <h1 className="text-5xl font-extrabold text-blue-300">Users</h1>
      <button
        onClick={getUsers}
        className="px-4 py-2 rounded-md bg-red-500 text-white my-5"
      >
        Get Users
      </button>
      <hr />
      <ul className="my-5 list-disc">
        {users.length > 0 ? users.map((user) => (
          <li key={user.id} className="list-item">
            {user.username}
          </li>
        )) : "Loading..."}
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};

export default Users;
