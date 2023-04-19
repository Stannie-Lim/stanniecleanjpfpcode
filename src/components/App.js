import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";

import { Nav } from "./Nav";
import { Students } from "./Students";
import { Campuses } from "./Campuses";
import { SingleStudent } from "./SingleStudent";
import { SingleCampus } from "./SingleCampus";

import { getStudents, getCampuses } from "../store";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampuses());
    dispatch(getStudents());
  }, []);

  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route exact path="/students" element={<Students />} />
        <Route exact path="/campuses" element={<Campuses />} />
        <Route exact path="/students/:id" element={<SingleStudent />} />
        <Route exact path="/campuses/:id" element={<SingleCampus />} />
      </Routes>
    </HashRouter>
  );
};
