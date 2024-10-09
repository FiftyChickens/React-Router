import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Layouts
import RootLayout from "./layouts/RootLayout";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Pluto from "./pages/Pluto";
import Mercury from "./pages/Mercury";
import Mars from "./pages/Mars";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="mercury" element={<Mercury />} />
      <Route path="mars" element={<Mars />} />
      <Route path="pluto" element={<Pluto />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
