import React from "react";
import Button from "./Button";
import Field from "./Field";
import Message from "./Message";
import "./styles.css";

export default function UserCreate(props) {
  return (
    <div className="ui form">
      <Field />
      <Button />
      <Message />
    </div>
  );
}
