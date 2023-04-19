import React, { useState } from "react";
import { useSelector } from "react-redux";

export const StudentForm = ({ student, submitForm, isEdit }) => {
  const campuses = useSelector(({ campuses }) => campuses);

  const [inputs, setInputs] = useState({
    firstName: student?.firstName || "",
    lastName: student?.lastName || "",
    email: student?.email || "",
    imageUrl: student?.imageUrl || "",
    gpa: student?.gpa || 0,
    campusId: student?.campusId || campuses[0]?.id,
  });

  const [inputValue, setInputValue] = useState("");

  const onChange = ({ target: { name, value } }) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submitForm(inputs);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        required
        name="firstName"
        value={inputs.firstName}
        onChange={onChange}
        placeholder="First name"
      />
      <input
        required
        name="lastName"
        value={inputs.lastName}
        onChange={onChange}
        placeholder="Last name"
      />
      <input
        required
        name="email"
        value={inputs.email}
        onChange={onChange}
        placeholder="Email"
      />
      <input
        name="imageUrl"
        value={inputs.imageUrl}
        onChange={onChange}
        placeholder="Image url"
      />
      <input
        required
        name="gpa"
        value={inputs.gpa}
        onChange={onChange}
        placeholder="GPA"
        type="number"
      />
      <select value={inputs.campusId} name="campusId">
        {campuses.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      <button type="submit" variant="outlined">
        {isEdit ? "Edit" : "Create"}
      </button>
      {inputs.imageUrl && (
        <img
          src={inputs.imageUrl}
          style={{ width: "300px", height: "300px" }}
        />
      )}
    </form>
  );
};
