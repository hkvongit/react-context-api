import React from "react";
import UserCreate from "./UserCreate";
import LangContext from "./contexts/LangContext.js";
import ProjectInfo from "./ProjectInfo";
import "./styles.css";

const englishMsg = "Hai I know English";
const polishMessage = "Hai, znam angielski";
export default class App extends React.Component {
  state = { language: "ENGLISH", message: englishMsg };
  onLanguageClick = (lang, message) => {
    this.setState({
      language: lang,
      message
    });
  };
  render() {
    console.log("learning context");
    return (
      <div className="App">
        <ProjectInfo />
        <div>
          Select a language
          <i
            className="flag us"
            onClick={() => this.onLanguageClick("ENGLISH", englishMsg)}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageClick("POLISH", polishMessage)}
          />
        </div>
        <LangContext.Provider value={this.state}>
          <UserCreate />
        </LangContext.Provider>
      </div>
    );
  }
}
