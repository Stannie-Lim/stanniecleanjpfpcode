import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
        <>
          <TextField
            required
            name={inputKey}
            label={capitalizeFirstLetter(inputKey)}
            value={inputValue}
            onChange={onChange}
            placeholder={capitalizeFirstLetter(inputKey)}
          />
          <div style={{ marginBottom: 8 }} />
        </>
      ))}
      <Button type="submit" variant="outlined">
        {isEdit ? "Edit" : "Create"}
      </Button>
      {inputs.imageUrl && (
        <img
          src={inputs.imageUrl}
          style={{ width: "300px", height: "300px" }}
        />
      )}
    </form>
  );
};
