import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { editCampus } from "../store";
import { CampusCard } from "./cards/CampusCard";
import { CampusForm } from "./forms/CampusForm";

export const SingleCampus = () => {
  const { id } = useParams();
  const { campus, students } = useSelector(({ campuses, students }) => ({
    students,
    campus: campuses.find((campus) => campus.id === +id),
  }));

  const dispatch = useDispatch();

  if (!campus) return null;

  const submitForm = (inputs) => {
    dispatch(editCampus(inputs, id));
  };

  return (
    <>
      <Link to="/campuses">Back</Link>
      <CampusCard campus={campus} students={students} />

      <h1>Edit Campus</h1>
      <CampusForm campus={campus} submitForm={submitForm} isEdit />
    </>
  );
};
