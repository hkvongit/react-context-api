import React from "react";
import LangContext from "./contexts/LangContext.js";
export default class Button extends React.Component {
  /*hooking up context 
  contextType - this keyword is strict, should not change it.
  */
  static contextType = LangContext;
  render() {
    const buttonText = this.context === "ENGLISH" ? "Submit" : "Polish Submit";
    console.log("langContext", this.context);
    return <button className="ui button primary">{buttonText}</button>;
  }
}

/**
 * We can also do like the below for hooking context after the declaration of the component.
 
  Button.contextType = LangContext;

 */
