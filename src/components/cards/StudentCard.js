import React from "react";

import { Link } from "react-router-dom";

export const StudentCard = ({ student, campus }) => {
  return (
    <>
      <div>
        <h1>{student.name}</h1>
        <h3>{student.email}</h3>
      </div>
      {campus && <h1>{campus.name}</h1>}
    </>
  );
};
