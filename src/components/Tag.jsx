import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

function Tag() {
  const [tag, setTag] = useState("Dog");
  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className="w-1/2 h-auto bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] ">
      <h1 className="mt-[15px] text-3xl font-bold underline uppercase">
        Random {tag} GIF
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} width={450} alt="random gif" loading="lazy" />
      )}

      <input
        type="text"
        name="input"
        value={tag}
        onChange={(event) => setTag(event.target.value)}
        className="w-10/12  bg-white text-lg py-2 rounded-lg  transition-all duration-200 text-center"
      />

      <button
        onClick={() => fetchData()}
        className="w-10/12 mb-[25px] bg-white text-lg py-2 rounded-lg opacity-80 hover:opacity-100 transition-all duration-200"
      >
        Generate
      </button>
    </div>
  );
}

export default Tag;
