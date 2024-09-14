import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import DashboardLayouts from "./layouts/DashboardLayouts";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Data from "./pages/Data";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayouts />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "data",
        element: <Data />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
