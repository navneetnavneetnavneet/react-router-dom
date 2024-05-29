import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const { data } = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=10`
    );

    setImages(data);
  };


  useEffect(() => {
    getImages();
  }, [page]);

  return images.length > 1 ? (
    <div className="my-10 w-full">
      <div className="images flex flex-wrap">
        {images.map((image) => (
          <div key={image.id} className="image mb-10 mr-10 w-[22%]">
            <img src={image.download_url} alt="" />
            <h1>{image.author}</h1>
          </div>
        ))}
      </div>
      <div className="text-center mt-10 flex justify-center gap-x-5">
        <span onClick={() => page > 1 && setPage(page - 1)} className="cursor-pointer text-xl hover:text-blue-500">Prev</span>
        <span className="text-3xl font-semibold">{page}</span>
        <span onClick={() => setPage(page + 1)} className="cursor-pointer text-xl hover:text-blue-500">Next</span>
      </div>
    </div>
  ) : (
    <h1 className="text-5xl mt-10 font-extrabold text-red-300 text-center">
      Loading...
    </h1>
  );
};

export default Home;
