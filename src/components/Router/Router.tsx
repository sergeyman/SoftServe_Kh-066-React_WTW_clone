import React from "react";
import { Routes, Route } from "react-router-dom";
import { PageHome } from "../../pages/PageHome/PageHome";
import { PageMovies } from "../../pages/PageMovies/PageMovies";
// import { PageTVShows } from "../PageTVShows";
// import { PagePeople } from "../PagePeople";
// import { PageMore } from "../PageMore";
// import { PageNotFound } from "../PageNotFound";

export const Router = () => (
  <Routes>
    <Route path="/" element={<PageHome />} />
    <Route path="/movies" element={< PageMovies />} />
    {/* <Route path="/tvshows" element={< PageTVShows />} />
    <Route path="/people" element={< PagePeople />} />
    <Route path="/more" element={< PageMore />} />
    <Route path="*" element={< PageNotFound />} /> */}
  </Routes>
);