import React from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  return (
    <div className="mt-5">
      <h1 className="text-2xl font-semibold">{id}</h1>
      <Link className="text-xl text-red-300" to="/users">
        back
      </Link>
    </div>
  );
};

export default Details;
