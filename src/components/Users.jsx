import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Form Submitted !");

    
    console.log({username, email, contact})

    navigate("/");
  };

  return (
    <div className="mt-10">
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
    </div>
  );
};

export default Users;
