import axios from "../helper/axios";
import React, { useState } from "react";

const About = () => {
    const [posts, setPosts] = useState([]);

  // axios call
  const getPosts = async () => {
    const { data } = await axios.get(
      "/posts"
    );
    setPosts(data);
    // console.log(data);
  };
  return (
    <div>
      <h1 className="text-5xl font-extrabold text-blue-300">Posts</h1>
      <button
        onClick={getPosts}
        className="px-4 py-2 mb-10 rounded-md bg-red-500 text-white my-5"
      >
        Get Posts
      </button>
      <ul className="list-disc">
        {posts.length > 0 ? posts.map((post) => (
          <li key={post.id} className="list-item">
            {post.title}
          </li>
        )) : "Loading..."}
      </ul>
    </div>
  );
};

export default About;
