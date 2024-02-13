import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div className=" w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className=" my-3 bg-red-500 px-4 py-2 rounded-full shadow-3xl"
            onClick={() => setColor("red")}
          >Red</button>

          <button
            className="my-3 bg-green-500 px-4 py-2 rounded-full shadow-2xl outline-2"
            onClick={() => setColor("green")}
          >Green</button>

          <button
            className="my-3 bg-blue-500 px-4 py-2 rounded-full shadow-2xl outline-2"
            onClick={() => setColor("blue")}
          >Blue</button>

          <button
            className="my-3 bg-yellow-500 px-4 py-2 rounded-full shadow-2xl outline-2"
            onClick={() => setColor("yellow")}
          >Yellow</button>

          <button
            className="my-3 bg-orange-500 px-4 py-2 rounded-full shadow-2xl outline-2"
            onClick={() => setColor("orange")}
          >Orange</button>

          <button
            className="my-3 bg-pink-500 px-4 py-2 rounded-full shadow-2xl outline-2"
            onClick={() => setColor("#f51385")}
          >Pink</button>

          <button
            className="my-3 bg-teal-500 px-4 py-2 rounded-full shadow-2xl outline-2"
            onClick={() => setColor("teal")}
          >Teal</button>

          <button
            className="my-3 bg-slate-500 px-4 py-2 rounded-full shadow-2xl outline-2"
            onClick={() => setColor("Grey")}
          >Grey</button>
        </div>
      </div>
    </div>
  );
}

export default App;
