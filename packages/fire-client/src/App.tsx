import { RouterProvider } from "react-router-dom";
import "./App.css";

import { Scaffold } from "./components/scaffold/scaffold";
import { router } from "./router";

function App() {
  return (
    <>
      <Scaffold>
        <RouterProvider router={router} />
      </Scaffold>
    </>
  );
}

export default App;
