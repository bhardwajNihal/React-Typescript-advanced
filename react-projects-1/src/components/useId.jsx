//useId is a React hook that generates a unique ID for accessibility and form elements. 
// It helps avoid ID conflicts when rendering multiple components.


import React, { useId } from "react";

const InputField = () => {
  const id = useId(); // Generates a unique ID

  return (
    <div>
      <label htmlFor={id}>Enter Name:</label>
      <input type="text" id={id} />
    </div>
  );
};

export default InputField;
