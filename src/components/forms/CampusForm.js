import React, { useState } from "react";

import { TextField, Grid, Button } from "@material-ui/core";

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
      <Grid container spacing={2}>
        {Object.entries(inputs).map(([inputKey, inputValue]) => (
          <Grid item xs={3}>
            <TextField
              required
              name={inputKey}
              value={inputValue}
              onChange={onChange}
              fullWidth
              label={capitalizeFirstLetter(inputKey)}
              variant="outlined"
            />
          </Grid>
        ))}
        <Grid item xs={3}>
          <Button type="submit" variant="outlined">
            {isEdit ? "Edit" : "Create"}
          </Button>
        </Grid>
        <Grid item xs={12}>
          {inputs.imageUrl && (
            <img
              src={inputs.imageUrl}
              style={{ width: "300px", height: "300px" }}
            />
          )}
        </Grid>
      </Grid>
    </form>
  );
};
