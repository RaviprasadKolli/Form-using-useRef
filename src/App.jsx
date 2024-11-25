import React, { useRef } from "react";

const UseRefFormExample = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Access input values using the ref
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    // Display the values in an alert
    alert(`Name: ${name}\nEmail: ${email}`);

    // Clear the input fields
    nameRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <div>
      <h2>Uncontrolled Form with useRef</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" ref={nameRef} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UseRefFormExample;
