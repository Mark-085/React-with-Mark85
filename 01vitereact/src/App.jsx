import { useState } from "react";
import Batman from "./Batman";
function App() {
  const [count, setCount] = useState(0);

  return (
    <> 
    <Batman/>
      <h1 className="mt-5 mb-5 px-10 py-10 max-w-sm mx-auto text-black bg-gray-300 rounded-xl shadow-lg flex items-center justify-center">
        Batman in the Game
      </h1>

      <p className=" flex items-center justify-center">
        Battttt
      </p>

      <h2 className="underline font-bold ">#SSR#</h2>

      <div className="absolute bottom-5">
        <button onClick={() => setCount((count) => count + 1)} >
          count is {count}
        </button>
      </div>
  </>
  );
}

export default App;
