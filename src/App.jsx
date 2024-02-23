import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Header from "./Components/Header";
import Belts from "./Pages/Belts";
import Raw from "./Pages/Raw";
import Smack from "./Pages/Smack";
import Member from "./Pages/Member";
import Membe from "./Pages/Membe";
import Hero from "./Pages/Hero";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Hero />} />
      <Route path="homepage" element={<Hero />} />
      <Route path="/raw" element={<Raw />} />
      <Route path="/raw/:superstar" element={<Member />} />
      <Route path="/smackdown" element={<Smack />} />
      <Route path="/smackdown/:superstar" element={<Membe />} />
      <Route path="champions" element={<Belts />} />
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
