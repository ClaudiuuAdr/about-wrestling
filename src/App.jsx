import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Raw from "./Pages/Raw";
import Smack from "./Pages/Smack";
import Member from "./Pages/Member";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="/raw" element={<Raw />} />
      <Route path="/raw/:superstar" element={<Member />} />
      <Route path="/smackdown" element={<Smack />} />
    </Route>,
  ),
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
