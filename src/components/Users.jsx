import axios from "axios";
import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Users = () => {
  const { pathname } = useLocation();

  // axios call
  const getUsers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(data);
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
        <li className="list-item">
          <Link className="text-xl font-semibold" to={`${pathname}/1`}>
            Item 1
          </Link>
        </li>
        <li className="list-item">
          <Link className="text-xl font-semibold" to={`${pathname}/2`}>
            Item 2
          </Link>
        </li>
        <li className="list-item">
          <Link className="text-xl font-semibold" to={`${pathname}/3`}>
            Item 3
          </Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};

export default Users;
