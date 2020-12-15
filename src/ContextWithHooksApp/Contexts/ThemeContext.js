import React, { createContext, Component } from "react";
export const ThemeContext = createContext();
class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { isDark: false };
  }
  changeTheme = () => {
    this.setState({ isDark: !this.state.isDark });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.changeTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export { ThemeProvider };
