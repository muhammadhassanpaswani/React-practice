import React from "react";
const Person = props => {
  return (
    <div>
      <p onClick={props.delete}>Hi, My name is {props.name}</p>
      <p>I am {props.age} years old</p>
    </div>
  );
};
export default Person;
