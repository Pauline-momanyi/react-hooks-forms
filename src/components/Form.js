import React, { useState } from "react";

function Form({onFirstNameChange, onLastNameChange,onNewsLetterChange, firstName, lastName, newsletter}) {
  

  return (
    <form>
      <input type="text" onChange={onFirstNameChange} value={firstName} />
      <input type="text" onChange={onLastNameChange} value={lastName} />
      <input type="checkbox" onChange={onNewsLetterChange} checked={newsletter} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
