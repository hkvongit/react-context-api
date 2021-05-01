import React, { useContext } from "react";
import LangContext from "./contexts/LangContext.js";

const Message = () => {
  const contextData = useContext(LangContext);
  console.log("Message comp.", contextData);
  const { message } = contextData;
  return <div>{message}</div>;
};

export default Message;
