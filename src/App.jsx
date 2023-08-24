import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="w-full h-auto flex  flex-col background relative items-center">
      <h1 className="rounded-2xl font-bold w-11/12 text-center bg-white mt-[40px] px-10 py-3 text-3xl">
        Random Gifs
      </h1>
      <div className="w-full flex flex-col items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
