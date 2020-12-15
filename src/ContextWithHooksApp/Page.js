import React, { Component } from "react";
import { ThemeContext } from "./Contexts/ThemeContext";
class Page extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDark } = this.context;
    const styles = {
      backgroundColor: isDark ? "red" : "white",
      height: "100vh",
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}

export default Page;
