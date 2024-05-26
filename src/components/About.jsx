import axios from "axios";
import React from "react";

const About = () => {

  // axios call
  const getPosts = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-5xl font-extrabold text-blue-300">Posts</h1>
      <button
        onClick={getPosts}
        className="px-4 py-2 rounded-md bg-red-500 text-white my-5"
      >
        Get Posts
      </button>
    </div>
  );
};

export default About;
