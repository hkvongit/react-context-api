import React from "react";
import UserCreate from "./UserCreate";
import LangContext from "./contexts/LangContext.js";
import ProjectInfo from "./ProjectInfo";
import "./styles.css";

export default class App extends React.Component {
  state = { language: "ENGLISH" };
  onLanguageClick = (lang) => {
    this.setState({
      language: lang
    });
  };
  render() {
    return (
      <div className="App">
        <ProjectInfo />
        <div>
          Select a language
          <i
            className="flag us"
            onClick={() => this.onLanguageClick("ENGLISH")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageClick("POLISH")}
          />
        </div>
        <LangContext.Provider value={this.state.language}>
          <UserCreate />
        </LangContext.Provider>
      </div>
    );
  }
}
