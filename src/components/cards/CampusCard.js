import React from "react";

export const CampusCard = ({ campus, students }) => {
  return (
    <>
      <div>
        <h1>{campus.name}</h1>
        <h3>{campus.address}</h3>
        <h3>{campus.description}</h3>
      </div>
      <div>
        {students && students.map((student) => <div>{student.name}</div>)}
      </div>
    </>
  );
};
