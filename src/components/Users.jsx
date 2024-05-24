import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Form Submitted !");

    console.log({ username, email, contact });

    navigate("/");
  };

  return (
    <div className="mt-5">
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="border-2 rounded-md px-4 py-1"
          type="text"
          placeholder="Username"
        />
        <br />
        <br />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="border-2 rounded-md px-4 py-1"
          type="email"
          placeholder="email@email.com"
        />
        <br />
        <br />
        <input
          onChange={(e) => setContact(e.target.value)}
          value={contact}
          className="border-2 rounded-md px-4 py-1"
          type="text"
          placeholder="Contact"
        />
        <br />
        <br />
        <button className="px-2 py-1 rounded-md bg-sky-600 text-white">
          Submit
        </button>
      </form>
      <hr />
      <ul className="mt-5 list-disc">
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
