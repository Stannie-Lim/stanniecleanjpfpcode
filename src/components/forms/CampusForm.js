import React, { useState } from "react";

const capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const CampusForm = ({ campus, submitForm, isEdit }) => {
  const [inputs, setInputs] = useState({
    name: campus?.name || "",
    imageUrl: campus?.imageUrl || "",
    address: campus?.address || "",
    description: campus?.description || "",
  });

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
      {Object.entries(inputs).map(([inputKey, inputValue]) => (
        <input
          required
          name={inputKey}
          value={inputValue}
          onChange={onChange}
          placeholder={capitalizeFirstLetter(inputKey)}
        />
      ))}
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
