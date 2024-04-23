import { useState } from "react";

function App() {
  const [color, setColor] = useState("grey");

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-transprent px-3 py-1.5 rounded-3xl">
          <button
            onClick={() => setColor("skyblue")}
            className="outline-none px-5 py-2 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "skyblue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("lightgoldenrodyellow")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "lightgoldenrodyellow" }}
          >
            Gold
          </button>

          <button
            onClick={() => setColor("lightpink")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
            onClick={() => setColor("palegreen")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "palegreen" }}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
