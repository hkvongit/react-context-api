import React from "react";
import LangContext from "./contexts/LangContext.js";
import "./styles.css";

export default class Field extends React.Component {
  /**
   * contextType is useful
   */
  static contextType = LangContext;
  render() {
    console.log("contextType", this.context);
    let labelText =
      this.context.language === "ENGLISH" ? "Name" : "Polish Name";
    return (
      <div className="ui field">
        <label>{labelText}</label>
        <input />
      </div>
    );
  }
}
