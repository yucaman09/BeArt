import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Catalog from "./Catalog";
import Contact from "./Contact";
import PriceList from "./PriceList";
import ToDo from "./projects/ToDo";

const BeartRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="catalog" element={<Catalog />}></Route>
        <Route path="price-list" element={<PriceList />}></Route>
        <Route path="to-do" element={<ToDo />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
};

export default BeartRoutes;
