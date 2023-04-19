import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { editStudent } from "../store";

import { StudentCard } from "./cards/StudentCard";
import { StudentForm } from "./forms/StudentForm";

export const SingleStudent = () => {
  const { id } = useParams();
  const { student, campuses } = useSelector(({ students, campuses }) => ({
    campuses,
    student: students.find((student) => student.id === +id),
  }));

  const dispatch = useDispatch();

  if (!student) return null;

  const submitForm = (values) => {
    dispatch(editStudent(values, id));
  };

  const campus = campuses.find(({ id }) => id === student?.campusId);

  return (
    <>
      <Link to="/students">Back</Link>
      <StudentCard student={student} campus={campus} />

      <h1>Edit Student</h1>
      <StudentForm student={student} submitForm={submitForm} isEdit />
    </>
  );
};
