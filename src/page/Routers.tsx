import { Home } from "./Home";
import { AddCard } from "./AddCard";
import { AssignAlias } from "./AssignAlias";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CardsContext } from "../contexts/CardsContext";
import { useCards } from "../hook/useCards";

export const Routers = () => {
  const { cards, addNewCard, assignAlias } = useCards();

  const HomeWithContext = () => (
    <CardsContext.Provider value={{ cards, addNewCard }}>
      <Home />
    </CardsContext.Provider>
  );

  const AddCardWithContext = () => (
    <CardsContext.Provider value={{ cards, addNewCard }}>
      <AddCard />
    </CardsContext.Provider>
  );

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomeWithContext />} />
        <Route path="/addCard" element={<AddCardWithContext />} />
        <Route path="/assignAlias" element={<AssignAlias assignAlias={assignAlias} />} />
      </Routes>
    </BrowserRouter>
  );
};