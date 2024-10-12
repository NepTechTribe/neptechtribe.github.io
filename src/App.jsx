
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import LandingPage from "./Pages/Landingpage";
import PageNotFound from "./Pages/pagenotfound";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPage />} />,
      <Route path="/home" element={<LandingPage />} />,
      <Route path="*" element={<PageNotFound />} />,
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
