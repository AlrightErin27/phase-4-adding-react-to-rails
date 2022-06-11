import { useEffect } from "react";

function App() {
  ////////////////////////// 🥚 🐣 🐥    FETCH MOVIES    🐥 🐣 🥚 //////////////////////////
  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((movies) => console.log(movies));
  }, []);

  return <h1>Movies App</h1>;
}

export default App;
