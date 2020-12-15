import React, { createContext } from "react";
import Navbar from "../Navbar";

export const LanguageContext = createContext();

export class Language extends React.Component {
  constructor(props) {
    this.state = {
      Language: "english",
    };
  }

  setLanguage = (e) => {
    this.setState({ Language: e.target.value });
  };
  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, setLang: this.setLanguage }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export const withLanguageContext = (Component) => (props) => (
  <LanguageContext.Consumer>
    {(v) => <Navbar LanguageContext={v} {...props} />}
  </LanguageContext.Consumer>
);
