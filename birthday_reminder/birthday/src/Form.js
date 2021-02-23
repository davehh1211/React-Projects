import React from "react";

const Form = () => {
  return (
    <div>
      <h2>Add a new friend</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name"></input>
        </label>
        <br />
        <label>
          Date:
          <input type="date" name="date"></input>
        </label>
        <br />
        <label>
          Social Network Contact:
          <input type="text" name="social-network"></input>
        </label>
        <button onClick={() => console.log("submmited")}>Add entry</button>
      </form>
    </div>
  );
};

export default Form;
