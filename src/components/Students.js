import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { createStudent, deleteStudent } from "../store";

import { StudentForm } from "./forms/StudentForm";

export const Students = () => {
  const students = useSelector(({ students }) => students);

  const dispatch = useDispatch();
  const submitForm = (inputs) => {
    dispatch(createStudent(inputs));
  };

  const destroyStudent = (id) => {
    dispatch(deleteStudent(id));
  };

  return (
    <ul>
      <h1>Create Student</h1>
      <StudentForm submitForm={submitForm} />

      {students.map(({ id, fullName }) => (
        <div>
          <Link to={`/students/${id}`}>{fullName}</Link>
          <button onClick={() => destroyStudent(id)}>
            Utterly destroy student
          </button>
        </div>
      ))}
    </ul>
  );
};
